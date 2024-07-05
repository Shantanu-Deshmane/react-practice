import React from 'react'

function List({task="wakeUP "}) { 
  return (
    <div className='flex justify-between gap-x-5 py-2 '>
      <span className='pl-4'>
      <input type="checkbox"  className='cursor-pointer mr-2'/>
      <span >{task}</span>
      </span>
      <p className='cursor-pointer pr-2 font-sem'>...</p>
    </div>
  )
}

export default List
