import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>Welcome to About us Page</h1>

            <NavLink to={'/'}>BACK</NavLink>
        </div>
    )
}

export default About