import React, { useState } from 'react'

function Header({mode}) {
const [dark, setDark] = mode

// if(dark) {
//   document.body.classList.add('dark')
// }else{
//   document.body.classList.add('dark')

// }

  return (
    <>
            <div className={`flex h-20  shadow-md justify-between items-center w-full px-14 ${dark ? 'dark' : ''}`}>
                <p className='text-2xl font-bold'> Explore the World !</p>
                <p className='cursor-pointer' onClick={() => {
                  setDark(!dark)
                }}> 
                <i><i className={`fa-regular fa-${dark ? 'moon' : 'sun'} pr-1`}></i></i> {dark ? "Dark Mode" : "Light Mode"}</p>
            </div>
    </>
  )
}

export default Header