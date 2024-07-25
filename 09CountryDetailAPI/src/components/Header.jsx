import React, { useState } from 'react'


function Header({mode}) {
const [dark, setDark] = mode


  return (
    <>
            <div className={`flex h-20  shadow-md justify-between items-center w-full px-14 ${dark ? 'header-dark' : ''}`}>
                <p className='text-2xl font-bold'> Explore the World !</p>
                <p className='cursor-pointer' onClick={() => {
                  setDark(!dark)
                  localStorage.setItem("isDark", !dark)
                }}> 
                <i><i className={`fa-regular fa-${dark ? 'sun' : 'moon'} pr-1`}></i></i> {dark ? "Light Mode" : "Dark Mode"}</p>
            </div>
    </>
  )
}

export default Header