import React from 'react'

function DropDown({setQuery}) {
  return (
    <>
        <div>
            <select onChange={(e)=>setQuery(e.target.value.toLowerCase())} className='region px-10 text-sm py-2 outline-none shadow-sm rounded-md'>
                <option  value="" hidden>Filter By region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Canada">Oceania</option>
            </select>
        </div>
    </>
  )
}

export default DropDown