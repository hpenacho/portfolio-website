import { useState } from 'react';
import { projects } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Projects.module.css';

function CaseStudy({ cs }) {
  return (
    <div className={styles.cs}>
      <div className={styles.csGrid}>
        <div>
          <p className={styles.csLabel}>The problem</p>
          <p className={styles.csText}>{cs.problem}</p>
        </div>
        <div>
          <p className={styles.csLabel}>My approach</p>
          <p className={styles.csText}>{cs.approach}</p>
        </div>
        <div>
          <p className={styles.csLabel}>The outcome</p>
          <p className={styles.csText}>{cs.outcome}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal(0.08);
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.09}s` }}
    >
      {project.featured && <span className={styles.featBadge}>Featured project</span>}

      <div className={styles.cardHeader}>
        <span className={styles.emoji}>{project.emoji}</span>
        <div className={styles.cardLinks}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="GitHub">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.03c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A10.51 10.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="Live demo">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.chips}>
        {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>

      {project.caseStudy && (
        <>
          <button className={styles.csToggle} onClick={() => setOpen(v => !v)}>
            {open ? '↑ Hide case study' : '↓ Read case study'}
          </button>
          {open && <CaseStudy cs={project.caseStudy} />}
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container-wide">
        <div className="container" style={{ padding: 0, marginBottom: '3rem' }}>
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Project Showcase</h2>
          <p className="section-sub">A selection of things I've built — from open-source tools to internal platforms.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
