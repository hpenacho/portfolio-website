import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Video.module.css';

export default function Video() {
  const [ref, visible] = useReveal();
  return (
    <section id="video" className={styles.section}>
      <div className="container">
        <div className={styles.inner} ref={ref}>
          <div className={`${styles.text} ${visible ? styles.visible : ''}`}>
            <span className="eyebrow">In person</span>
            <h2 className="section-title">60-second intro</h2>
            <p className={styles.body}>
              Sometimes a face and a voice say more than a résumé ever could.
              Here's a brief introduction to who I am, how I think, and what
              I'm looking for in my next role.
            </p>
            <ul className={styles.bullets}>
              <li><span className={styles.dot} />Who I am &amp; what I care about</li>
              <li><span className={styles.dot} />The type of problems I love solving</li>
              <li><span className={styles.dot} />What I'm looking for next</li>
            </ul>
          </div>

          <div className={`${styles.videoWrap} ${visible ? styles.visible : ''}`}>
            {/*
              ── HOW TO ADD YOUR VIDEO ──────────────────────────
              Option A — YouTube:
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="60-second intro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />

              Option B — Vimeo:
                <iframe
                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                  title="60-second intro"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />

              Option C — Self-hosted (place file in /public):
                <video controls poster="/video-thumb.jpg" className={styles.iframe}>
                  <source src="/intro.mp4" type="video/mp4" />
                </video>
              ────────────────────────────────────────────────── */}
            <div className={styles.placeholder}>
              <div className={styles.playBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className={styles.placeholderTitle}>Your video goes here</p>
              <p className={styles.placeholderSub}>See the code comment in Video.jsx for instructions</p>
              <div className={styles.bar}><div className={styles.barFill} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
