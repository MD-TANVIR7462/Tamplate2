import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Team from '@/components/home/Team';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Team />
      <About />
      <Contact />
    </>
  );
}