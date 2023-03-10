import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
