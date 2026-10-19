import Image from 'next/image';
import { person, metrics } from '../data/content';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.cols}>
          <div className={styles.left}>
            {person.available && (
              <div className={styles.availBadge}>
                <span className={styles.availDot} />
                <span className={styles.availLabel}>Available now</span>
                <span className={styles.availSep}>· </span>
                <span className={styles.availNote}>Remote-first · Portugal</span>
              </div>
            )}

            <h1 className={styles.name}>{person.name}</h1>

            <p className={styles.roleLine}>{person.roleLine}</p>

            <p className={styles.valueProp}>{person.valueProp}</p>

            <p className={styles.proofLine}>{person.proofLine}</p>

            <div className={styles.ctas}>
              <a href="#contact" className={styles.btnPrimary}>
                Contact me
              </a>
              <a href={person.cvUrl} download className={styles.btnSecondary}>
                Download CV
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className={styles.btnIcon} title="GitHub" aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.03c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A10.51 10.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btnIcon} title="LinkedIn" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.photoWrap}>
              <Image
                src="/photo.jpg"
                alt={person.name}
                priority
                loading="eager"
                fill
                sizes="(max-width: 768px) 96px, 320px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.metrics}>
          {metrics.map(m => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
              {m.detail && <span className={styles.metricDetail}>{m.detail}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  );
}
