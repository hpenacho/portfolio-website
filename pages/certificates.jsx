import Head from 'next/head';
import Nav from '../components/Nav';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';
import { person } from '../data/content';

export default function CertificatesPage() {
  return (
    <>
      <Head>
        <title>Courses &amp; Certificates — {person.name}</title>
        <meta
          name="description"
          content={`Courses and professional certificates completed by ${person.name}, covering AI agents, integrations and workflow automation.`}
        />
      </Head>

      <Nav />
      <main>
        <Certificates archive />
      </main>
      <Footer />
    </>
  );
}
