import React from 'react'

function TopCards({title,value}) {
  return (
    
      <div className='w-1/2 p-5 bg-white mr-5 rounded-lg shadow-sm'>
        <h1 className='text-lg font-normal'>{title}</h1>
        <h1 className='mt-4 text-3xl'>{value}</h1>
      </div>
    
  )
}

export default TopCards
