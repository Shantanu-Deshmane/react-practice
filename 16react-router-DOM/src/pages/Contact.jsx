import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h2 className='contact'>Contact</h2>
        <button> <NavLink to={'contact-us'} e>Contact</NavLink> </button>
        <button><NavLink to={'address'}>Drop Letter</NavLink></button>
    </div>
  )
}

export default Contact