import React from 'react'

function Card() {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden'>
        <img className='w-full h-full object-cover' src="" alt="" />
      </div>
      <h1>Vishwajeet</h1>
      <p className='text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, enim.</p>
    </div>
  )
}

export default Card
