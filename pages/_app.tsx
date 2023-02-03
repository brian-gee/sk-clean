import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/header';
import Nav from '@/components/nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}
