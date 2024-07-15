import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navBar'>
        <ul>
            <li>
                {/* Instead of "<a>" tag here react uses "Link" from react-router-dom with 'to attribute to navigate the pages' */}
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/about'}>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar