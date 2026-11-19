import styles from '../styles/Certificates.module.css';

const credentials = [
  {
    title: 'Introduction to MCP',
    issuer: 'Anthropic',
    year: '2026',
    description: 'Model Context Protocol concepts, architecture and tool integrations.',
    mark: 'AI',
    certificateUrl: '',
  },
  {
    title: 'Workflow Automation',
    issuer: 'n8n',
    year: '2026',
    description: 'Workflow orchestration, API integrations and AI-powered automations.',
    mark: 'n8n',
    certificateUrl: '',
  },
];

const featured = {
  title: 'AI Agents Course',
  issuer: 'Hugging Face',
  description: 'A practical, hands-on course covering agent architecture, tool calling, LangGraph and agent evaluation.',
  certificateUrl: '',
};

function CertificatePreview({ issuer, title, featured: isFeatured = false, href }) {
  const preview = (
    <span className={`${styles.preview} ${isFeatured ? styles.previewLarge : ''}`} aria-hidden="true">
      <span className={styles.previewTop}>
        <span className={styles.previewMark}>{issuer === 'Hugging Face' ? '🤗' : issuer === 'n8n' ? '⌘' : 'AI'}</span>
        <span className={styles.previewIssuer}>{issuer}</span>
      </span>
      <span className={styles.previewKicker}>CERTIFICATE</span>
      <span className={styles.previewTitle}>{title}</span>
      <span className={styles.previewLines}><i /><i /><i /></span>
      <span className={styles.previewSeal}>✓</span>
    </span>
  );

  if (!href) {
    return <span className={styles.previewFrame}>{preview}</span>;
  }

  return (
    <a
      className={styles.previewFrame}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} certificate`}
    >
      {preview}
      <span className={styles.previewOpen} aria-hidden="true">↗</span>
    </a>
  );
}

export default function Certificates() {
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
            <CertificatePreview
              issuer={featured.issuer}
              title={featured.title}
              featured
              href={featured.certificateUrl}
            />
          </div>
        </article>

        <div className={styles.moreHeading}>More learning</div>
        <div className={styles.credentialList}>
          {credentials.map(item => (
            <article className={styles.credential} key={item.title}>
              <CertificatePreview issuer={item.issuer} title={item.title} href={item.certificateUrl} />
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
