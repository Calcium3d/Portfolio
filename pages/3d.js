import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import rx7 from '../public/3d/rx7.png';
import abstract from '../public/3d/Abstract.png';
import cloud from '../public/3d/cloud.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>3D</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 place-content-center mt-24">
        <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
          <h1 className="bg-nord0 text-white text-4xl text-center">Cars</h1>
          <br />
            <Image src={rx7} alt="rx7" layout="responsive" className="bg-nord0 shadow-inner md:float-right  object-contain md:col-start-2 md:col-end-2 rounded bg-nord0" />            
        </div>
        <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
          <h1 className="bg-nord0 text-white text-4xl text-center">Abstract</h1>
          <br />
            <Image src={abstract} alt="rx7" layout="responsive" className="bg-nord0 shadow-inner md:float-right  object-contain md:col-start-2 md:col-end-2 rounded bg-nord0" />
        </div>
        <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
          <h1 className="bg-nord0 text-white text-4xl text-center">Other</h1>
          <br />
            <Image src={cloud} alt="rx7" layout="responsive" className="bg-nord0 shadow-inner md:float-right  object-contain md:col-start-2 md:col-end-2 rounded bg-nord0" />
        </div>
      </div>
      <div className="grid place-content-center">
        <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
          <p className="bg-nord0 text-white text-2xl text-center w-auto">For more click <a className="no-underline bg-nord0 text-nord7" href="https://the_blue_chalk.artstation.com/">Here</a></p>
        </div>
      </div>
    </div>
  );
}
