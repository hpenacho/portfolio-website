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
        className={styles.previewFrame + ' certificatePreviewButton'}
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
      className="certificateViewerBackdrop"
      role="presentation"
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="certificateViewerDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-viewer-title"
      >
        <header className="certificateViewerHeader">
          <div className="certificateViewerHeading">
            <span className="certificateViewerEyebrow">Certificate</span>
            <h2 id="certificate-viewer-title">{item.title}</h2>
            <p>{item.issuer} · {item.year}</p>
          </div>

          <div className="certificateViewerActions">
            {!fileIsPdf && (
              <button
                type="button"
                className="certificateViewerAction"
                onClick={onToggleZoom}
                aria-pressed={imageZoomed}
              >
                {imageZoomed ? 'Fit to screen' : 'View full size'}
              </button>
            )}
            {item.sourceUrl && (
              <a
                className="certificateViewerAction"
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Original record ↗
              </a>
            )}
            {verificationUrl && (
              <a
                className="certificateViewerAction"
                href={verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify ↗
              </a>
            )}
            <a
              className="certificateViewerAction"
              href={item.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open original ↗
            </a>
            <a
              className="certificateViewerAction certificateViewerDownload"
              href={item.certificateFile}
              download
            >
              Download ↓
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              className="certificateViewerClose"
              onClick={onClose}
              aria-label="Close certificate viewer"
            >
              ×
            </button>
          </div>
        </header>

        <div className={'certificateViewerStage' + (imageZoomed && !fileIsPdf ? ' certificateViewerStageZoomed' : '')}>
          {fileIsPdf ? (
            <iframe
              className="certificateViewerPdf"
              src={item.certificateFile}
              title={item.title + ' certificate PDF'}
            />
          ) : (
            <img
              className={'certificateViewerImage' + (imageZoomed ? ' certificateViewerImageZoomed' : '')}
              src={item.certificateFile}
              alt={item.title + ' certificate'}
              draggable="false"
            />
          )}
        </div>
        {!fileIsPdf && (
          <p className="certificateViewerHint">
            {imageZoomed
              ? 'Scroll to inspect the full-size image. Select “Fit to screen” to return.'
              : 'Select “View full size” to inspect fine print and certificate details.'}
          </p>
        )}
      </section>

      <style jsx>{`
        .certificateViewerBackdrop {
          position: fixed;
          z-index: 1200;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: rgba(8, 8, 10, 0.86);
          backdrop-filter: blur(6px);
        }

        .certificateViewerDialog {
          display: flex;
          flex-direction: column;
          width: min(1120px, 100%);
          height: min(900px, calc(100dvh - 2.5rem));
          overflow: hidden;
          border: 1px solid var(--border-hi);
          border-radius: 16px;
          background: var(--bg-card);
          color: var(--text-1);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
        }

        .certificateViewerHeader {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.9rem 1.15rem;
          border-bottom: 1px solid var(--border);
        }

        .certificateViewerHeading { min-width: 0; }
        .certificateViewerEyebrow {
          display: block;
          margin-bottom: 0.12rem;
          color: var(--gold);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .certificateViewerHeading h2 {
          overflow: hidden;
          color: var(--text-1);
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.25;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .certificateViewerHeading p {
          margin-top: 0.12rem;
          color: var(--text-2);
          font-size: 0.72rem;
        }

        .certificateViewerActions {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: flex-end;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .certificateViewerAction,
        .certificateViewerClose {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 0.42rem 0.62rem;
          border: 1px solid var(--border-hi);
          border-radius: 7px;
          background: var(--bg-surface);
          color: var(--text-2);
          font-family: inherit;
          font-size: 0.7rem;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .certificateViewerAction:hover,
        .certificateViewerClose:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .certificateViewerClose {
          width: 34px;
          padding: 0;
          font-size: 1.35rem;
          font-weight: 400;
        }

        .certificateViewerStage {
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          justify-content: center;
          min-height: 0;
          overflow: auto;
          padding: 1rem;
          background: #171719;
        }

        .certificateViewerStageZoomed {
          align-items: flex-start;
          justify-content: flex-start;
        }

        .certificateViewerImage {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          user-select: none;
        }

        .certificateViewerImageZoomed {
          max-width: none;
          max-height: none;
          margin: 0 auto;
        }

        .certificateViewerPdf {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 0;
          border: 0;
          background: #fff;
        }

        .certificateViewerHint {
          flex: 0 0 auto;
          padding: 0.45rem 0.75rem;
          color: var(--text-3);
          font-size: 0.66rem;
          text-align: center;
        }

        .certificatePreviewButton {
          appearance: none;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: zoom-in;
        }

        .certificatePreviewButton:focus-visible,
        .certificateViewerAction:focus-visible,
        .certificateViewerClose:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        @media (max-width: 700px) {
          .certificateViewerBackdrop {
            padding: 0;
          }

          .certificateViewerDialog {
            width: 100%;
            height: 100dvh;
            border: 0;
            border-radius: 0;
          }

          .certificateViewerHeader {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.6rem;
            padding: 0.75rem 0.8rem;
          }

          .certificateViewerHeading h2 { font-size: 1rem; }

          .certificateViewerActions {
            width: 100%;
            justify-content: flex-start;
            gap: 0.35rem;
          }

          .certificateViewerAction,
          .certificateViewerClose {
            min-height: 32px;
            padding: 0.38rem 0.5rem;
            font-size: 0.66rem;
          }

          .certificateViewerClose {
            margin-left: auto;
            width: 32px;
            padding: 0;
          }

          .certificateViewerStage { padding: 0.5rem; }
        }

        @media (max-width: 380px) {
          .certificateViewerDownload { display: none; }
          .certificateViewerAction { font-size: 0.62rem; }
        }
      `}</style>
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
