import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Notion } from '../../components/3D';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <Notion title="Cars" />
    </div>
  );
}