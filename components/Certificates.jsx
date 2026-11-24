import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Certificates.module.css';
import { credentials } from '../data/content';

const HOMEPAGE_CREDENTIAL_LIMIT = 5;

/*
 * Credential data fields:
 * - certificateFile: local image or PDF path displayed in the responsive viewer.
 * - verificationUrl: external verification page (legacy certificateUrl is also supported).
 * - sourceUrl: optional original provider record, separate from verification.
 */

function getVerificationUrl(item) {
  return item.verificationUrl || item.certificateUrl || null;
}

function CredentialRow({ item, onPreview }) {
  const [ref, visible] = useReveal(0.08);
  const verificationUrl = getVerificationUrl(item);
  const hasCertificateFile = typeof item.certificateFile === 'string' && item.certificateFile.trim().length > 0;

  const preview = item.certificateImage ? (
    <Image
      className={styles.certificateImage}
      src={item.certificateImage}
      alt={item.title + ' certificate preview'}
      width={480}
      height={340}
      sizes="(max-width: 390px) 68px, (max-width: 700px) 82px, 116px"
    />
  ) : (
    <span className={styles.previewFallback} aria-hidden="true">
      <span className={styles.previewMark}>{item.mark || '✓'}</span>
      <span>Certificate preview</span>
    </span>
  );

  let certificatePreview;

  if (hasCertificateFile) {
    certificatePreview = (
      <button
        type="button"
        className={styles.previewFrame + ' ' + styles.previewButton}
        onClick={() => onPreview(item)}
        aria-label={'View ' + item.title + ' certificate'}
        aria-haspopup="dialog"
      >
        {preview}
        <span className={styles.previewOpen} aria-hidden="true">⤢</span>
      </button>
    );
  } else if (verificationUrl) {
    certificatePreview = (
      <a
        className={styles.previewFrame}
        href={verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'Open ' + item.title + ' credential verification page'}
      >
        {preview}
        <span className={styles.previewOpen} aria-hidden="true">↗</span>
      </a>
    );
  } else {
    certificatePreview = <span className={styles.previewFrame}>{preview}</span>;
  }

  return (
    <article ref={ref} className={styles.credential + ' ' + (visible ? styles.visible : '')}>
      {certificatePreview}
      <div className={styles.credentialCopy}>
        <h3>{item.title}</h3>
        <p className={styles.credentialMeta}>{item.issuer}<span aria-hidden="true"> · </span>{item.year}</p>
        <p className={styles.credentialDescription}>{item.description}</p>
      </div>
      {verificationUrl ? (
        <a
          className={styles.iconLink}
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={'Verify ' + item.title + ' with ' + item.issuer}
          title="Verify credential"
        >
          ↗
        </a>
      ) : (
        <span className={styles.pendingIcon} aria-label="Verification link not added">↗</span>
      )}
    </article>
  );
}

function CertificateViewer({ item, onClose, closeButtonRef, imageZoomed, onToggleZoom }) {
  if (!item) return null;

  const fileIsPdf = /\.pdf(?:$|[?#])/i.test(item.certificateFile);
  const verificationUrl = getVerificationUrl(item);

  return (
    <div
      className={styles.viewerBackdrop}
      role="presentation"
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.viewerDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-viewer-title"
      >
        <header className={styles.viewerHeader}>
          <div className={styles.viewerHeading}>
            <span className={styles.viewerEyebrow}>Certificate</span>
            <h2 id="certificate-viewer-title">{item.title}</h2>
            <p>{item.issuer} · {item.year}</p>
          </div>

          <div className={styles.viewerActions}>
            {!fileIsPdf && (
              <button
                type="button"
                className={styles.viewerAction}
                onClick={onToggleZoom}
                aria-pressed={imageZoomed}
              >
                {imageZoomed ? 'Fit to screen' : 'View full size'}
              </button>
            )}
            {item.sourceUrl && (
              <a
                className={styles.viewerAction}
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Original record ↗
              </a>
            )}
            {verificationUrl && (
              <a
                className={styles.viewerAction}
                href={verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify ↗
              </a>
            )}
            <a
              className={styles.viewerAction}
              href={item.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open original ↗
            </a>
            <a
              className={styles.viewerAction + ' ' + styles.viewerDownload}
              href={item.certificateFile}
              download
            >
              Download ↓
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.viewerClose}
              onClick={onClose}
              aria-label="Close certificate viewer"
            >
              ×
            </button>
          </div>
        </header>

        <div className={styles.viewerStage + (imageZoomed && !fileIsPdf ? ' ' + styles.viewerStageZoomed : '')}>
          {fileIsPdf ? (
            <iframe
              className={styles.viewerPdf}
              src={item.certificateFile}
              title={item.title + ' certificate PDF'}
            />
          ) : (
            <img
              className={styles.viewerImage + (imageZoomed ? ' ' + styles.viewerImageZoomed : '')}
              src={item.certificateFile}
              alt={item.title + ' certificate'}
              draggable="false"
            />
          )}
        </div>
        {!fileIsPdf && (
          <p className={styles.viewerHint}>
            {imageZoomed
              ? 'Scroll to inspect the full-size image. Select “Fit to screen” to return.'
              : 'Select “View full size” to inspect fine print and certificate details.'}
          </p>
        )}
      </section>


    </div>
  );
}

export default function Certificates({ archive = false, limit = HOMEPAGE_CREDENTIAL_LIMIT }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const openCertificate = item => {
    triggerRef.current = document.activeElement;
    setImageZoomed(false);
    setSelectedCertificate(item);
  };

  const closeCertificate = () => setSelectedCertificate(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = event => {
      if (event.key === 'Escape') closeCertificate();
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
    };
  }, [selectedCertificate]);

  const displayedCredentials = archive || limit === null
    ? credentials
    : credentials.slice(0, limit);
  const hasMore = !archive && displayedCredentials.length < credentials.length;

  return (
    <>
      <section id="certificates" className={styles.section + ' ' + (archive ? styles.archiveSection : '')}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="eyebrow">Professional development</span>
            {archive ? (
              <h1 className={styles.heading}>Courses &amp; Certificates</h1>
            ) : (
              <h2 className={styles.heading}>Professional Development</h2>
            )}
            <p className={styles.intro}>
              {archive
                ? 'A collection of courses and certificates covering AI, integrations and workflow automation.'
                : 'Selected learning in AI, automation and integrations.'}
            </p>
          </div>

          <div className={styles.credentialList} id="certificate-list">
            {displayedCredentials.map(item => (
              <CredentialRow key={item.title} item={item} onPreview={openCertificate} />
            ))}
          </div>

          {hasMore && (
            <div className={styles.viewAllWrap}>
              <Link className={styles.viewAllLink} href="/certificates">
                View all {credentials.length} certificates <span aria-hidden="true">↗</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <CertificateViewer
        item={selectedCertificate}
        onClose={closeCertificate}
        closeButtonRef={closeButtonRef}
        imageZoomed={imageZoomed}
        onToggleZoom={() => setImageZoomed(value => !value)}
      />
    </>
  );
}
