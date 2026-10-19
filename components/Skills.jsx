import { skills } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  const [ref, visible] = useReveal();
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <span className="eyebrow">Technical skills</span>
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <div className={styles.grid} ref={ref}>
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`${styles.group} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${gi * 0.08}s` }}
            >
              <p className={styles.category}>{group.category}</p>
              <div className={styles.chips}>
                {group.items.map(item => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
