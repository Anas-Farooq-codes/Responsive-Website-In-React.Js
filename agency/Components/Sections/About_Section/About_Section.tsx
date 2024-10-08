import React from 'react'
import Title from '@/Components/Title/Title'
import Button from '@/Components/Button/Button'
import { check } from '@/utils/icons'
import { aboutStats } from '@/utils/utils'

function About_Section() {
  return (
    <section className="pt-[5rem] pb-16 mq-sections">
    <Title title="Learn More About Us." label="Who We Are" />
    <div className="mt-[5rem] grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
        <h1 className="text-2xl">
          We're a team of passionate creators here to help you build and grow
          your digital products.
        </h1>
        <p className="py-8 text-gray-300">
          Our team of developers, designers, and innovators is dedicated to
          transforming your ideas into impactful digital products. We combine
          creativity with technical expertise to deliver solutions that exceed
          expectations. With a focus on user experience, cutting-edge
          technology, and strategic growth, we ensure your digital products
          thrive. Let us help turn your vision into a reality that resonates
          with your audience and drives success.
        </p>

        <ul className="flex flex-col gap-4 text-gray-200">
          <li className="flex text-[1.25rem] items-center gap-3 font-bold transition-all duration-300 hover:scale-110 cursor-pointer">
            <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-md">
              {check}
            </span>
            <span>Digital Product Development</span>
          </li>
          <li className="flex text-[1.25rem] items-center gap-3 font-bold transition-all duration-300 hover:scale-110 cursor-pointer">
            <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-md">
              {check}
            </span>
            <span>User Experience Design</span>
          </li>
          <li className="flex text-[1.25rem] items-center gap-3 font-bold transition-all duration-300 hover:scale-110 cursor-pointer">
            <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-md">
              {check}
            </span>
            <span>Cutting-Edge Technology</span>
          </li>
          <li className="flex text-[1.25rem] items-center gap-3 font-bold transition-all duration-300 hover:scale-110 cursor-pointer">
            <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-md">
              {check}
            </span>
            <span>Strategic Growth</span>
          </li>
        </ul>
        <div className="mt-8">
          <Button label="Learn More" />
        </div>
      </div>
      <div className="relative p-5">
        <div className="relative">
          <img
            src="/images/image--team-1.webp"
            alt="About Us"
            width={600}
            height={400}
            className="w-full rotate-3 rounded-lg hover:rotate-0 transition-all duration-300 ease-in-out"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-purple-800 z-[-1] rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-full rotate-3 bg-purple-500 z-[-1] rounded-lg"></div>
                </div>
            </div>
        </div>

        <div className='mt-16 py-[6rem] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 border-t-2'>

        {aboutStats.map((stat, index) => {
  return (
    <div key={index} className='flex flex-col md:gap-4 items-center justify-center text-center'>
      <h1 className={`text-8xl font-extrabold text-gray-200 ${stat.ff}`}>
        {stat.count}
      </h1>
      <p className='text-gray-200 text-2xl'>
        {stat.title}
      </p>
    </div>
  );
})}
        </div>

    </section>
  )
}

export default About_Section
