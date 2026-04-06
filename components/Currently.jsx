// Currently
import { currently } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Currently.module.css';

export default function Currently() {
  const [ref, visible] = useReveal();
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner} ref={ref}>
          <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
            <span className="eyebrow">Right now</span>
            <h2 className={styles.title}>Currently</h2>
            <p className={styles.sub}>A live snapshot of what I'm thinking about, building, and looking for.</p>
          </div>
          <div className={styles.cards}>
            {currently.map((item, i) => (
              <div
                key={item.label}
                className={`${styles.card} ${visible ? styles.visible : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <span className={styles.emoji}>{item.emoji}</span>
                <div>
                  <p className={styles.cardLabel}>{item.label}</p>
                  <p className={styles.cardValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
