import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface AwardCardProps {
    award: {
        date: string;
        companyLogo: string;
        category: string;
        link: string;
        mt?: string;
    };
    index: number;

}

function AwardCard({ award, index}: AwardCardProps) {
    const { date, companyLogo, category, link, mt} = award;
  return (
    <div className={`relative ${mt} py-8 px-4 flex flex-col border-2 rounded-md`}>

        <h4 className='text-xl font-medium'>{date}</h4>
        <Link href={link}>
        <Image src={companyLogo} alt={category} width={200} height={200} className='cursor-pointer filter invert contrast-200 h-[2.3rem]'/>
      </Link>
      <h4 className='text-xl font-medium'>{category}</h4>

      <span className='absolute bottom-0 right-3 text-9xl font-extrabold opacity-5'>{++index}</span>
    </div>
  )
}

export default AwardCard