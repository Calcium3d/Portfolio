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
      
    </div>
  );
}
