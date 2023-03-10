import Head from 'next/head';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Contact from '@/components/contact';
import ScrollToTopButton from '@/components/scrollToTop';

export default function Home() {
  return (
    <>
      <Head>
        <title>SK Clean</title>
        <meta name="description" content="SK Pool Cleaning Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/swimming-pool.png" />
      </Head>
      <main
        id="home"
        className="max-w-6xl flex flex-col justify-between m-auto">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Contact />
        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}
