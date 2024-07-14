import React from 'react'
import List from './List'

function Todo() {
  return (
    <div className='w-full h-[700px] flex justify-center items-center'>
        <div className='w-[350px] bg-white px-6 py-8 rounded shadow-lg'>
            <h3 className='font-bold text-2xl mb-8'>ToDo App</h3>
            <div  className='w-full flex justify-around bg-slate-200'>
            <input className='bg-transparent py-2' type="text" name="" id="" />
            <button>Add+</button>
            </div>
        <List/>
        </div>
    </div>
  )
}

export default Todo