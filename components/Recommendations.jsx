import { useState } from 'react';
import { recommendations } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Recommendations.module.css';

const avatarClass = {
  gold:  'avGold',
  coral: 'avCoral',
  sage:  'avSage',
  blue:  'avBlue',
};

function RecCard({ rec, index }) {
  const [ref, visible] = useReveal(0.08);
  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <span className={styles.qMark}>&ldquo;</span>
      <p className={styles.text}>{rec.shortText}</p>
      <div className={styles.author}>
        <div className={`${styles.avatar} ${styles[avatarClass[rec.color] || 'avGold']}`}>
          {rec.initials}
        </div>
        <div className={styles.authorText}>
          <p className={styles.name}>{rec.name}</p>
          <p className={styles.role}>{rec.role}</p>
        </div>
        <a
          href={rec.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.liLink}
          title="View on LinkedIn"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Recommendations() {
  return (
    <section id="recommendations" className={styles.section}>
      <div className="container">
        <span className="eyebrow">Social proof</span>
        <h2 className="section-title">What colleagues say</h2>
        <p className="section-sub">
          Recommendations from LinkedIn — from people I&apos;ve worked with.
        </p>

        <div className={styles.grid}>
          {recommendations.slice(0, 6).map((r, i) => (
            <RecCard key={r.name + i} rec={r} index={i} />
          ))}
        </div>

        <div className={styles.showMore}>
          <a
            href="https://www.linkedin.com/in/hugopenacho/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.showMoreBtn}
          >
            View all 17 recommendations on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}