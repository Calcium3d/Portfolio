import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="font-sans w-screen">
      <nav className='flex items-center flex-wrap bg-nord1 p-1 '>
        <Link href='/'>
          <a className='bg-nord1 inline-flex items-center p-2 mr-4 '>
            <span className=' bg-nord1 text-xl text-white font-bold uppercase tracking-wide'>
              Oishik Das
            </span>
          </a>
        </Link>
        <button
          className=' bg-nord1 inline-flex p-3 hover:bg-nord1 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          } bg-nord1  w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='bg-nord1 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/programming'>
              <a className='bg-nord1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-nord0 hover:text-white'>
                Programming
              </a>
            </Link>
            <Link href='/3d'>
              <a className='bg-nord1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-nord0 hover:text-white'>
                3D
              </a>
            </Link>
            <Link href='/about'>
              <a className='bg-nord1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-nord0 hover:text-white'>
                About Me
              </a>
            </Link>
            <Link href='/contact'>
              <a className='bg-nord1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-nord0 hover:text-white'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};