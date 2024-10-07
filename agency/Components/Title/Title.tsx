import React from 'react'

function Title({ title, label}: { title: string; label: string}) {
  return (
    <div className='relative flex flex-col gap-4 text-white'>
      <p className='bg-purple-500  py-2 px-8 self-start uppercase text-sm font-medium border border-color-1 rounded-[30px]'>
        {label}
      </p>
      <h2 className='font-bold text-2xl md:text-4xl'>
        {title}
      </h2>
      <span>
        <hr className='w-20 border-2 border-color-1 rounded-lg' />
      </span>
      </div>
  )
}

export default Title
