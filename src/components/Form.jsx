import React from 'react'

function form() {
  return (
    <div className='mt-10 flex justify-center'>
      <form className='flex gap-10' action="">
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" />
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" />
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" />
      </form>
    </div>
  )
}

export default form
