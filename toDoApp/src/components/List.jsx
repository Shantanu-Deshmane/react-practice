import React from 'react'

function List({text,setTodoList}) {
  return (
    <div className='flex justify-between px-4  py-3'>
        <p className='text-lg' > {text} </p>
        <span className='text-red-600 font-bold cursor-pointer'>X</span>
    </div>
  )
}

export default List