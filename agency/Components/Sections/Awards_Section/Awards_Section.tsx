import Title from '@/Components/Title/Title'
import { awards } from '@/utils/utils'
import React from 'react'
import AwardCard from '@/Components/AwardCard/AwardCard'

function Awards_Section() {
  return (
    <section className='pt-[5rem] pb-16 px-6 xl:px-[18rem] md:px-8 lg:px-16'>
    <Title title='Honoring My Achievements' label='Our Awards'/>


    <div className='mt-[5rem] text-gray-300'>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {awards.map((award, index) => {
                return <AwardCard  key={index} award={award} index={index} />
            })}
        </div>
    </div>
    </section>
  )
}

export default Awards_Section