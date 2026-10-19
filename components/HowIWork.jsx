import { howIWork } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/HowIWork.module.css';

export default function HowIWork() {
  const [ref, visible] = useReveal();
  return (
    <section id="how-i-work" className={styles.section}>
      <div className="container">
        <span className="eyebrow">Working style</span>
        <h2 className="section-title">My Approach</h2>
        <p className="section-sub">What to expect when working with me and how I solve project headaches</p>
        <div className={styles.grid} ref={ref}>
          {howIWork.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
