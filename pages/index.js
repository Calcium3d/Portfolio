import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <section className="m-0 min-h-ninety grid place-content-center text-center font-sans w-screen">
        <h1 className="text-4xl text-white">
          Hello, My Name is Oishik Das
        </h1>
        <h2 className="text-2xl text-white">
          Welcome to my portfolio
        </h2>
      </section>
    </>
  );
}

