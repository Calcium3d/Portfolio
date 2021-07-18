import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <div className="h-screen bg-green-100">
        My Name is Oishik Das
      </div>
    </div>
  );
}

