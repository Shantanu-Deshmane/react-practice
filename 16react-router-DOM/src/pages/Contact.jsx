import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h2 className='contact'>Contact</h2>
        <button> <NavLink to={'contact-us'}>Contact</NavLink> </button>
        <button> <NavLink to={'address'}>Drop Letter</NavLink> </button>
        <Outlet/>
    </div>
  )
}

export default Contact