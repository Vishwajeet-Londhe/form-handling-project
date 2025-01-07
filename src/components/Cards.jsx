import React from 'react'
import Card from './Card'

function Cards({users , handleRemove}) {
  return (
    <div className='w-ful p-4 flex justify-center gap-4 flex-wrap max-h-96 overflow-auto'>
      {users.map((item, index)=>{
        return <Card handleRemove={handleRemove} id={index} user={item} key={index} />
        
      })}
    </div>
  )
}

export default Cards
