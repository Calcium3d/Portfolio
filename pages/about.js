import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import instagram from '../public/about/instagram.png'
import github from '../public/about/github.png'
import twitter from '../public/about/twitter.png'
import youtube from '../public/about/youtube.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <Navbar />
      <div className="min-h-fifteen grid place-content-center text-white text-5xl md:text-7xl">
          <h1>
              Who Am I?
          </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
                <h1 className="bg-nord0 text-white text-4xl text-center md:text-6xl">
                    I'm 15
                </h1>
                <br />
                <p className="bg-nord0 text-white text-1xl text-center md:text-2xl">
                        And ive been teaching myself for 3 years
                </p>

            </div>
            <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
                <h1 className="bg-nord0 text-white text-4xl text-center md:text-6xl">
                    During which i've learnt
                </h1>
                <br />
                <p className="bg-nord0 text-white text-1xl md:text-2xl text-center">
                        <div className="grid grid-cols-2">    
                            <h2 className="bg-nord0 leading-7">Python</h2>
                            <h2 className="bg-nord0 leading-7">Node JS</h2>
                            <h2 className="bg-nord0 leading-7">React</h2>
                            <h2 className="bg-nord0 leading-7">Next.js</h2>
                            <h2 className="bg-nord0 leading-7">Rust</h2>
                            <h2 className="bg-nord0 leading-7">Blender</h2>
                        </div>
                </p>
                
            </div>
            <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
                <h1 className="bg-nord0 text-white text-4xl text-center md:text-6xl">
                    Education
                </h1>
                <br />
                <p className="bg-nord0 text-white text-1xl md:text-2xl text-center">
                        Im still in school. So no job for me yet
                </p>
            </div>
            <div className="shadow-xl bg-nord0 p-10 m-10 rounded-2xl">
                <h1 className="bg-nord0 text-white text-4xl text-center md:text-6xl">
                    Socials
                </h1>
                <br />
                <div className="bg-nord0 grid grid-cols-1 grid-rows-4 place-content-centre justify-content md:grid-cols-4 md:grid-rows-1">
                    <a href="https://www.instagram.com/theeoishik/" className="bg-nord0">
                        <center className="bg-nord0">
                            <Image src={instagram} alt="instagram" className="bg-nord0 object-contain" width={100} height={100}/>
                        </center>
                    </a>
                    <a href="https://twitter.com/The_Blue_Chalk">
                        <center className="bg-nord0">
                            <Image src={twitter} alt="instagram" className="bg-nord0 object-contain" width={100} height={100}/>
                        </center>
                    </a>
                    <a href="https://github.com/awsomemanNever/">
                        <center className="bg-nord0">
                            <Image src={github} alt="instagram" className="bg-nord0 object-contain" width={100} height={100}/>
                        </center>
                    </a>
                    <a href="https://www.youtube.com/channel/UCmREB_8lraheyHM2ql6tRQw">
                        <center className="bg-nord0">
                            <Image src={youtube} alt="instagram" className="bg-nord0 object-contain" width={100} height={100}/>
                        </center>
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
}

