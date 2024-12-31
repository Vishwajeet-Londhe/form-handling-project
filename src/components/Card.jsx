import React from 'react'

function Card() {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden'>
        <img className='w-full h-full object-cover' src="" alt="" />
      </div>
      <h1 className=' mt-1 text-xl font-semibold'>Vishwajeet</h1>
      <h4 className='opacity-60 text-xs font-semibold'> Vishwajeet@gmail.com</h4>
      <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, enim.</p>
      <button className=' px-3 py-1 bg-red-600 rounded-md text-xs font-semibold text-white mt-4'>Remove It</button>
    </div>
  )
}

export default Card
