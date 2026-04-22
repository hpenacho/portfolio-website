import { Html, Head, Main, NextScript } from 'next/document';
import { person } from '../data/content';

// Standardized description for SEO and Socials
const seoDescription = "Senior Technical Consultant. 300+ SaaS rollouts & API integrations for 100+ enterprise clients. Based in Portugal, open to remote global work or relocation.";

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.role,
  url: 'https://hugopenacho.com',
  image: 'https://hugopenacho.com/og-image.png', // Added image for Google rich snippets
  email: person.email,
  sameAs: [person.github, person.linkedin],
  description: seoDescription,
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
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var saved = localStorage.getItem('theme');
            var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', saved || preferred);
          })();
        `}} />

        {/* Primary SEO */}
        <meta name="description" content={seoDescription} />
        <meta name="author" content={person.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hugopenacho.com/" />

        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://hugopenacho.com" />
        <meta property="og:title"       content={`${person.name} — ${person.role}`} />
        <meta property="og:description" content={seoDescription}/>
        <meta property="og:image"       content="https://hugopenacho.com/og-image.png" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={person.name} />

        {/* Twitter card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={`${person.name} — ${person.role}`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image"       content="https://hugopenacho.com/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}