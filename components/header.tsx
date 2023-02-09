import Head from 'next/head';

export default function Header() {
  return (
    <Head>
      <link rel="shortcut icon" href="/swimming-pool.png" />
      <title>SK Clean</title>
      <meta name="description" content="The best clean for your pool." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
