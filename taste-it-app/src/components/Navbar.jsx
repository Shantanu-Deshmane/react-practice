import React from 'react'
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/SearchSlice";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <>
        <nav className='flex flex-col lg:flex-row justify-between py-3'>
            <div>
                <h3 className='text-xl text-gray-600 font-semibold' >{new Date().toUTCString().slice(0,16)}</h3>
                <h1 className='font-bold text-2xl'>Taste-it Food</h1>
            </div>
            <div>
                <input 
                className='w-full lg:w-[25vw] px-2 py-2 rounded outline-none border border-gray-500' 
                type="search" 
                name="search" 
                placeholder='Search here' 
                onChange={(e) => dispatch(setSearch(e.target.value))}
                />
            </div>
        </nav>
    </>
  )
}

export default Navbar