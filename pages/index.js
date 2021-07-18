import Head from 'next/head';
import '../styles/Home.module.css';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <div className="division">
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

