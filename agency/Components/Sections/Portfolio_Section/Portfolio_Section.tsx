"use client"

import React from 'react'
import Title from '@/Components/Title/Title'
import portfolios from '@/utils/portfolio'
import Link from 'next/link';
import {motion} from "framer-motion" 
import Image from 'next/image';

function Portfolio_Section() {
    const firstHalf = portfolios.length / 2;
    const secondHalf = portfolios.length;
    const firstHalfPortfolios = portfolios.slice(0, firstHalf);
    const secondHalfPortfolios = portfolios.slice(firstHalf, secondHalf);


    const [hovered, setHovered] = React.useState(false);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };

    const hoverEffect = {
        scale: 1.05,
        rotateX: -5,
        rotateY: 10,
        transition: { duration: 0.3, ease: "easeOut" },
      };
    
      const hoverEffect2 = {
        scale: 1.05,
        rotateX: 5,
        rotateY: 10,
        transition: { duration: 0.3, ease: "easeOut" },
      };

  return (
    <section className='pt-[5rem] pb-16 px-[18rem] relative mq-sections'>
    <Title title="Check Out Some Of Our Recent Projects."label= "Our Work" ></Title>

    <div className='mt-[5rem] flex flex-col gap-8 lg:flex-row'>
        <div className='relative flex-1 flex flex-col gap-8'>
            {firstHalfPortfolios.map((portfolio) => {
                return <Link href={`/portfolio/${portfolio.link}`} key={portfolio.id}>
 <motion.div
                  className={`flex flex-col items-center justify-center shadow-md rounded-lg h-[740px] ${portfolio.bgColor}`}
                  whileHover={hoverEffect}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <div className="w-full px-8">
                    <Image
                      src={portfolio.previewImage}
                      alt={portfolio.title}
                      className="w-full object-cover rounded-lg shadow-md"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <p className="text-white font-semibold text-lg uppercase bg-3 px-4 p-2 rounded-md shadow-md">
                      {portfolio.category}
                    </p>
                    <div className="px-6 py-3 flex flex-col gap-1 items-center text-white bg-2 rounded-md shadow-md">
                      <h2 className="text-white font-bold text-3xl">
                        {portfolio.title}
                      </h2>
                      <p>{portfolio.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
            </Link>
            })}
        </div>
        <div className='lg:mt-[14rem] flex-1 flex flex-col gap-8'>
        {secondHalfPortfolios.map((portfolio) => {
                return <Link href={`/portfolio/${portfolio.link}`} key={portfolio.id}>
 <motion.div
                  className={`flex flex-col items-center justify-center shadow-md rounded-lg h-[740px] ${portfolio.bgColor}`}
                  whileHover={hoverEffect2}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <div className="w-full px-8">
                    <Image
                      src={portfolio.previewImage}
                      alt={portfolio.title}
                      className="w-full object-cover rounded-lg shadow-md"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <p className="text-white font-semibold text-lg uppercase bg-3 px-4 p-2 rounded-md shadow-md">
                      {portfolio.category}
                    </p>
                    <div className="px-6 py-3 flex flex-col gap-1 items-center text-white bg-2 rounded-md shadow-md">
                      <h2 className="text-white font-bold text-3xl">
                        {portfolio.title}
                      </h2>
                      <p>{portfolio.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
            </Link>
            })}
        </div>
    </div>
    </section>
  )
}

export default Portfolio_Section
