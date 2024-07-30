import React from 'react'

function Navbar() {
  return (
    <>
        <nav className='flex flex-col lg:flex-row justify-between py-3'>
            <div>
                <h3 className='text-xl text-gray-600 font-semibold' >{new Date().toUTCString().slice(0,16)}</h3>
                <h1 className='font-bold text-2xl'>Taste-it Food</h1>
            </div>
            <div>
                <input className='w-full lg:w-[25vw] px-2 py-2 rounded outline-none border border-gray-500' type="search" name="search" placeholder='Search here' autoComplete='off' />
            </div>
        </nav>
    </>
  )
}

export default Navbar