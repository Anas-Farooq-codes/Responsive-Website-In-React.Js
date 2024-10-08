"use client";
import { search,  email, phone, arrowRight } from '@/utils/icons';
import { navLinks } from '@/utils/utils';
import Link from 'next/link'; 
import Image from 'next/image'; 
import React from 'react';
import { motion } from 'framer-motion';

function Hero_Section() {
    const arr = Array(4).fill(0);
    const [navOpen, setNavOpen] = React.useState(false);

const  navX = {
  hidden: { x: "-100%" },
  visible: { x: 0},

};

  return (
    <section className='relative h-full w-full'>
        <div className="absolute w-full h-[100vh] top-[-120px] md:top-0 flex justify-evenly z-[-1]">
          {arr.map((_, i) => (
            <div key={i} className="relative w-[1px] h-full bg-2">
              <span className='absolute bottom-0 w-2 h-2 bg-color-2 translate-x-[-50%] rounded-full'></span>
            </div>
          ))}
        </div>

        <nav className='px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadow-none flex items-center justify-between bg-1 border-b border-color-1 mq-sections'> 
        <div className='flex items-center gap-2 py-5 lg:py-0'>
            <img src="/ByteWave.webp" alt="logo" width={260} height={260} />
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
<button className='hidden lg:inline-block py-6 px-10 text-2xl text-gray-400 border-x border-color-1 hover:bg-2 transition-all duration-200 ease-in-out'>
  {search}
</button>

{/* Burger Menu for Smaller Screens  */}

<div className='lg:hidden flex flex-col gap-1 cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
  <div className='w-8 h-1 bg-purple-500 rounded-md'></div>
  <div className='w-8 h-1 bg-purple-500 rounded-md'></div>
  <div className='w-8 h-1 bg-purple-500 rounded-md'></div>
  <div className='w-8 h-1 bg-purple-500 rounded-md'></div>
</div>
        </nav>

        <div className='mt-[7rem] md:mt-[7rem] px-[18rem] mq-sections'>
          <div className='gradient-purple mb-4 py-2 px-4 rounded-tl-[12px] rounded-br-[12px]'>
            <p className='font-medium text-white'>Digital Product Agency</p>
          </div>
          <h1 className='text-3xl md:text-6xl'>Bringing Your Ideas to Life Digitally</h1>
          <div className='mt-6 flex flex-col gap-10 lg:flex-row'>
          <img src="/image--hero.webp" alt="hero Image" width="700" height="400" className='rounded-lg mt-4 object-cover'/>
            <div className='lg:mt-12 flex flex-col justify-between text-gray-300'>
              <div className='flex flex-col gap-4 md:gap-6'>
                <h3 className="text-white text-2xl font-semibold">Let’s Move Your Business Forward Together!</h3>
<p>
At ByteWave, we believe in collaboration and innovation. We’re here to understand your goals and craft tailored digital solutions that help your business grow. From strategy to execution, we’re with you every step of the way, ensuring your success in a rapidly evolving digital world.
</p>
<div className='relative cta-button self-start'><Link href="/"  className='flex items-center gap-4'><span>Explore More</span>{arrowRight}<span className='blob'></span></Link></div>
              </div>
              <Link href="/" className='hidden mouse-animation lg:flex justify-center items-center'>
                <Image src="/arrow--down-long.svg" alt='hero image' width={10} height={10} className='rounded'/></Link>
            </div>
          </div>
        </div>

{/* Nav For Smaller Screens  */}

<motion.div className="px-8 fixed z-50 flex flex-col gap-8 left-0 top-0 w-[18rem] h-[100vh] bg-2 lg:hidden"
initial="hidden" animate={navOpen ? "visible" : "hidden"}
transition={{ duration: 0.3 }}
variants={navX}
>
<div className='flex items-center gap-2 py-5 lg:py-0'>
            <img src="/ByteWave.webp" alt="logo" width={260} height={260} />
            
        </div>
      <nav className='bg-3 px-4 py-4 rounded-md'>
      <ul className='flex flex-col gap-4 text-white font-medium'>
        {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.url} className="inline-block w-full hover:text-purple-500 transition-all duration-200 ease-in-out">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='flex flex-col gap-2'>
<p className='flex items-center gap-2 text-gray-300 '>
  {phone} 
  +92 317 965 7473
</p>
<p className='flex items-center gap-2 text-gray-300 font-medium'>
  {email}
  anasfarooq2006@gmail.com
</p>
      </div>
</motion.div>

      </section>
  );
}

export default Hero_Section
