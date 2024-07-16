import React from 'react'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
        <Link style={{marginRight:"15px", color:"Violet"}}>Product: 123</Link>
        <Link style={{marginRight:"15px", color:"Violet"}}>Product: 456</Link>
        <Link style={{marginRight:"15px", color:"Violet"}}>Product: 789</Link>
    </div>
  )
}

export default Products;