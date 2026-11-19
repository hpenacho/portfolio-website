import styles from '../styles/Certificates.module.css';
import { credentials } from '../data/content';

function CertificatePreview({ item, featured = false }) {
  const preview = item.certificateImage ? (
    <img
      className={styles.certificateImage}
      src={item.certificateImage}
      alt={`${item.title} certificate preview`}
    />
  ) : (
    <span className={`${styles.preview} ${featured ? styles.previewLarge : ''}`} aria-hidden="true">
      <span className={styles.previewTop}>
        <span className={styles.previewMark}>{item.mark}</span>
        <span className={styles.previewIssuer}>{item.issuer}</span>
      </span>
      <span className={styles.previewKicker}>CERTIFICATE</span>
      <span className={styles.previewTitle}>{item.title}</span>
      <span className={styles.previewLines}><i /><i /><i /></span>
      <span className={styles.previewSeal}>✓</span>
    </span>
  );

  if (!item.certificateUrl) {
    return <span className={styles.previewFrame}>{preview}</span>;
  }

  return (
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
  );
}

export default function Certificates() {
  const { featured, additional } = credentials;

  return (
    <section id="certificates" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className="eyebrow">Professional development</span>
          <h2 className={styles.heading}>Professional Development</h2>
          <p className={styles.intro}>Selected learning in AI, automation and integrations.</p>
        </div>

        <article className={styles.featured}>
          <div className={styles.featuredCopy}>
            <span className={styles.featuredLabel}>Featured learning</span>
            <h3>{featured.title}</h3>
            <p className={styles.issuer}>{featured.issuer}</p>
            <p className={styles.description}>{featured.description}</p>
            {featured.certificateUrl ? (
              <a className={styles.primaryLink} href={featured.certificateUrl} target="_blank" rel="noopener noreferrer">
                View certificate <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className={styles.pendingLink}>Certificate link to be added</span>
            )}
          </div>
          <div className={styles.featuredPreview}>
            <CertificatePreview item={featured} featured />
          </div>
        </article>

        <div className={styles.moreHeading}>More learning</div>
        <div className={styles.credentialList}>
          {additional.map(item => (
            <article className={styles.credential} key={item.title}>
              <CertificatePreview item={item} />
              <div className={styles.credentialCopy}>
                <h3>{item.title}</h3>
                <p className={styles.credentialMeta}>{item.issuer}<span aria-hidden="true"> · </span>{item.year}</p>
                <p className={styles.credentialDescription}>{item.description}</p>
              </div>
              {item.certificateUrl ? (
                <a className={styles.iconLink} href={item.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} certificate`}>↗</a>
              ) : (
                <span className={styles.pendingIcon} aria-label="Certificate link not added">↗</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
