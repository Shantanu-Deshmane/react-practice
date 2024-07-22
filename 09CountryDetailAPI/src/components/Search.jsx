import React from 'react'



function Search({setQuery}) {
  return (
    <>
        <div>
        <div className='search-input px-10 py-1 shadow-sm rounded-md '>
            <i className='fa-solid fa-magnifying-glass cursor-pointer' ></i>
            <input onChange={(e)=>setQuery(e.target.value.toLowerCase())} className='text-sm bg-transparent px-5 py-2 inline-block outline-none' type="text" placeholder='Search Country here' id="" />
        </div>
        </div>
    </>
  )
}

export default Search