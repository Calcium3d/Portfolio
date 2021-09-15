import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <div className="m-0 min-h-ninety grid place-content-center text-center font-sans w-screen">
        <h1 className="h1">
          Hello, My Name is Oishik Das
        </h1>
        <h2 className="subtitle">
          Welcome to my portfolio
        </h2>
      </div>
    </div>
  );
}
