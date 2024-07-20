import React from 'react'
import { NavLink } from "react-router-dom";
let style ={paddingRight:"20px", textDecoration:'none', color:'#fff'}
function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:'center',backgroundColor:"gray"}}>
        <ul >
            <NavLink style={(style)} to={'/'}>Home</NavLink>
            <NavLink style={(style)} to={'/about'}>About</NavLink>
            <NavLink style={(style)} to={'/contact'}>Contact</NavLink>
            <NavLink style={(style)} to={'/productList'}>Products</NavLink>
        </ul>
    </div>
  )
}

export default Navbar