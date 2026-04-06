import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import About from '../components/About';
import Currently from '../components/Currently';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import HowIWork from '../components/HowIWork';
import Recommendations from '../components/Recommendations';
import Video from '../components/Video';
import Footer from '../components/Footer';
import { person, experience, education } from '../data/content';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${person.name} — ${person.role}`}</title>
      </Head>

      <Nav />

      <main>
        <Hero />
        <Metrics />
        <Timeline
          id="experience"
          eyebrow="Career"
          title="Work Experience"
          subtitle="Six years of experience in IT, from Software Development at Siemens to Technical Consultancy at Textkernel / Bullhorn"
          items={experience}
          surface={true}
        />
        <Timeline
          id="education"
          eyebrow="Background"
          title="Academic History"
          subtitle="Where the foundations were built."
          items={education}
          surface={false}
        />
        <HowIWork />
        <Skills />
        <About />
        {/* <Currently /> */}
        {/* <Projects /> */}
        <Recommendations />
        {/* <Video /> */}
        <Footer />
      </main>
    </>
  );
}
