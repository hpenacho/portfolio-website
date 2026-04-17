import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Timeline.module.css';

function CompanyLogo({ item }) {
  if (!item.logo) return null;

  const baseClass = `${styles.logo} ${item.logoInvert ? styles.logoInvert : ''}`;

  return (
    <>
      <img
        src={item.logo}
        alt={`${item.company} logo`}
        className={`${baseClass} ${item.logoDark ? styles.logoLight : ''}`.trim()}
        width={100}
        height={32}
        loading="lazy"
        onError={(e) => e.target.style.display = 'none'}
      />
      {item.logoDark && (
        <img
          src={item.logoDark}
          alt={`${item.company} logo`}
          className={`${styles.logo} ${styles.logoDark}`}
          width={100}
          height={32}
          loading="lazy"
          onError={(e) => e.target.style.display = 'none'}
        />
      )}
    </>
  );
}

function TimelineItem({ item, index }) {
  const [ref, visible] = useReveal(0.08);
  return (
    <div ref={ref} className={`${styles.item} ${visible ? styles.visible : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className={styles.dot} />
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <p className={styles.period}>{item.period}</p>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>
              {item.company}
              {item.location && <span className={styles.loc}> · {item.location}</span>}
            </p>
          </div>
          <CompanyLogo item={item} />
        </div>
        <p className={styles.desc}>{item.desc}</p>
        <div className={styles.tags}>
          {item.tags.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ id, eyebrow, title, subtitle, items, surface }) {
  return (
    <section id={id} className={surface ? styles.surface : styles.base}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
        <div className={styles.timeline}>
          <div className={styles.line} />
          {items.map((item, i) => <TimelineItem key={item.role + item.company} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
