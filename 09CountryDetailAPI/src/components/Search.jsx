import React from 'react'
import CounteriesData from '../CountriesData.js'



function Search({setQuery}) {
  return (
    <>
        <div className='bg-white px-10 py-1 shadow-sm rounded-md '>
            <i className='fa-solid fa-magnifying-glass cursor-pointer' ></i>
            <input onChange={(e)=>setQuery(e.target.value.toLowerCase())} className='text-sm px-5 py-2 inline-block outline-none' type="text" placeholder='Search Country here' id="" />
        </div>
    </>
  )
}

export default Search