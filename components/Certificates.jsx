import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Certificates.module.css';
import { credentials } from '../data/content';

const HOMEPAGE_CREDENTIAL_LIMIT = 5;

function CredentialRow({ item }) {
  const [ref, visible] = useReveal(0.08);

  const preview = item.certificateImage ? (
    <Image
      className={styles.certificateImage}
      src={item.certificateImage}
      alt={`${item.title} certificate preview`}
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

  const certificatePreview = item.certificateUrl ? (
    <a
      className={styles.previewFrame}
      href={item.certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${item.title} certificate`}
    >
      {preview}
      <span className={styles.previewOpen} aria-hidden="true">↗</span>
    </a>
  ) : (
    <span className={styles.previewFrame}>{preview}</span>
  );

  return (
    <article ref={ref} className={`${styles.credential} ${visible ? styles.visible : ''}`}>
      {certificatePreview}
      <div className={styles.credentialCopy}>
        <h3>{item.title}</h3>
        <p className={styles.credentialMeta}>{item.issuer}<span aria-hidden="true"> · </span>{item.year}</p>
        <p className={styles.credentialDescription}>{item.description}</p>
      </div>
      {item.certificateUrl ? (
        <a
          className={styles.iconLink}
          href={item.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${item.title} certificate`}
        >
          ↗
        </a>
      ) : (
        <span className={styles.pendingIcon} aria-label="Certificate link not added">↗</span>
      )}
    </article>
  );
}

export default function Certificates({ archive = false, limit = HOMEPAGE_CREDENTIAL_LIMIT }) {
  const displayedCredentials = archive || limit === null
    ? credentials
    : credentials.slice(0, limit);
  const hasMore = !archive && displayedCredentials.length < credentials.length;

  return (
    <section id="certificates" className={`${styles.section} ${archive ? styles.archiveSection : ''}`}>
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
            <CredentialRow key={item.title} item={item} />
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
  );
}
