import React from 'react'
import Link from 'next/link';

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
        <Link href={link}/>
    </div>
  )
}

export default AwardCard