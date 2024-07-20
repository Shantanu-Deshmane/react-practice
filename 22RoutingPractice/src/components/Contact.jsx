import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1>Contact Us</h1>
      <button> <NavLink to={'phone'}>Contact</NavLink> </button>
      <button> <NavLink to={'email'}>Email</NavLink> </button>
      <NavLink to={'/'}>BACK</NavLink>
      <Outlet />
    </div>
  )
}

export default Contact