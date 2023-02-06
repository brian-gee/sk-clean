import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
