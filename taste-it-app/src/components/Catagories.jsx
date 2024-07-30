import React from 'react'

function Catagories() {
  return (
    <>
        <div className=' mt-8 '>
            <h3 className=' text-lg my-4 font-semibold '>Find the best food</h3>
            <div className='my-4 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
                <button className='px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 hover:text-white'>All</button>
                <button className='px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 hover:text-white'>Lunch</button>
                <button className='px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 hover:text-white'>Breakfast</button>
                <button className='px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 hover:text-white'>Dinner</button>
                <button className='px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 hover:text-white'>Snacks</button>
            </div>
        </div>
    </>
  )
}

export default Catagories   