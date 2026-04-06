import { Html, Head, Main, NextScript } from 'next/document';
import { person } from '../data/content';

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.role,
  url: 'https://hugopenacho.com',
  email: person.email,
  sameAs: [person.github, person.linkedin],
  description: person.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lisbon',
    addressCountry: 'PT',
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Prevent flash of wrong theme before React loads */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var saved = localStorage.getItem('theme');
            var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', saved || preferred);
          })();
        `}} />

        {/* Primary SEO */}
        <meta name="description" content={`${person.name} — ${person.role}. ${person.tagline}`} />
        <meta name="keywords" content="Technical Consultant, Web Developer, Textkernel, Bullhorn, Software Implementation, Python, XML, Jenkins, React, Node.js, Remote" />
        <meta name="author" content={person.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hugopenacho.com" />

        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://hugopenacho.com" />
        <meta property="og:title"       content={`${person.name} — ${person.role}`} />
        <meta property="og:description" content={person.tagline} />
        <meta property="og:image"       content="https://hugopenacho.com/og-image.png" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={person.name} />

        {/* Twitter card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={`${person.name} — ${person.role}`} />
        <meta name="twitter:description" content={person.tagline} />
        <meta name="twitter:image"       content="https://hugopenacho.com/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
