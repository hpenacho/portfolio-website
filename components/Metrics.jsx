import { metrics } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Metrics.module.css';

export default function Metrics() {
  const [ref, visible] = useReveal();
  return (
    <div className={styles.strip}>
      <div className={`container-wide ${styles.grid}`} ref={ref}>
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`${styles.item} ${visible ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className={styles.value}>{m.value}</span>
            <span className={styles.label}>{m.label}</span>
            <span className={styles.detail}>{m.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
