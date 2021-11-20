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
      <div className="min-h-fifteen grid place-content-center mx-auto animate-fade">
        <h1 className="text-white text-center align-middle text-4xl md:text-6xl">
            Want to Contact me?
        </h1>
      </div>
      <div className="grid place-content-center mx-auto my-40 animate-fade">
        <p className="grid place-content-center text-3xl text-nord10 md:text-5xl">
            <a href="mailto:thebluechalk@gmail.com">
                Gimme an email
            </a>
        </p>
      </div>
    </div>
  );
}
