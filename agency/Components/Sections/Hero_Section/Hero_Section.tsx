import { navLinks } from '@/utils/utils';
import Link from 'next/link'; 
import React from 'react';

function Hero_Section() {
    const arr = Array(4).fill(0);
  return (
    <section className='relative h-full w-full'>
        <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
          {arr.map((_, i) => (
            <div key={i} className="relative w-[1px] h-full bg-2">
              <span className='absolute bottom-0 w-2 h-2 bg-color-2 translate-x-[-50%] rounded-full'></span>
            </div>
          ))}
        </div>

        <nav className='px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadow-none flex justify-between bg-1 border-b border-color-1'> 
        <div className='flex items-center gap-2 py-5 lg:py-0'>
            <img src="/Cody-Nerds.webp" alt="logo" width={80} height={80} />
            <h1>Anas Codes</h1>
        </div>

        <ul className="hidden lg:flex items-center gap-9 text-white font-medium">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.url} className="p-4">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
<button className='hidden lg:inline-block py-6 px-10 text-gray-400 border-x border-color-1 hover:bg-2 transition-all duration-200 ease-in-out'></button>
        </nav>
      </section>
  )
}

export default Hero_Section
