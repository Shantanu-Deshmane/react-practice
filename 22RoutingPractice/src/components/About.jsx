import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

function About() {
    return (
        <div>
            <Navbar/>
            <h1>Welcome to About us Page</h1>

            <NavLink to={'/'}>BACK</NavLink>
        </div>
    )
}

export default About