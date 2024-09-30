import React from 'react'

function Button( { label }:{ label: string}) {
  return (
    <button className='px-8 py-3 border-2 border-purple-500 text-gray-200 font-medium rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300 ease-out'>{label}</button>
  )
}

export default Button
