import Head from 'next/head';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Fire</title>
        <meta name="description" content="Created with love - BrianGee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="home"
        className="max-w-6xl flex flex-col justify-between m-auto">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
