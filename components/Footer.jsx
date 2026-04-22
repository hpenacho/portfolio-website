import { useState } from 'react';
import { person } from '../data/content';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Wire to Formspree: fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) })
    setSent(true);
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={styles.eyebrow}>Get in touch</span>
            <h2 className={styles.title}>Let's work together</h2>
            <p className={styles.sub}>
              Whether you have a role in mind, have any business inquiries,
              or just want to say hi — I'd love to hear from you. I typically respond within 24 hours.
            </p>
            <div className={styles.contactLinks}>
              <a href={`mailto:${person.email}`} className={styles.contactItem}>
                <span className={styles.contactIcon}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                {person.email}
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg></span>
                linkedin.com/in/hugopenacho
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.03c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A10.51 10.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg></span>
                github.com/hpenacho
              </a>
              <a href={person.cvUrl} download className={styles.contactItem}>
                <span className={styles.contactIcon}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg></span>
                Download CV (PDF)
              </a>
            </div>
          </div>

{/*           <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3 className={styles.successTitle}>Message received!</h3>
                <p className={styles.successSub}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input className={styles.input} id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input} id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea className={`${styles.input} ${styles.textarea}`} id="message" name="message" placeholder="Tell me about the role or what you'd like to work on together..." value={form.message} onChange={handleChange} required rows={5} />
                </div>
                <button type="submit" className={styles.submit}>
                  Send message
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            )}
          </div> */}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} {person.name} · Built with Next.js</p>
          <p className={styles.copy}>This site uses cookieless, privacy-friendly analytics. No personal data is collected.</p>
          <a href="#hero" className={styles.topLink}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
