import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Products() {
  let data = ['123', '456', '145','456', '4545']
  return (
    <div>

      {data.map((id) => (
        
          <Link to={id} style={{ marginRight: "15px", color: "Violet" }}>Product: {id}</Link>
      ))
      }

      {/* <Link to={'456'} style={{marginRight:"15px", color:"Violet"}}>Product: 456</Link>
        <Link to={'789'} style={{marginRight:"15px", color:"Violet"}}>Product: 789</Link> */}

      <Outlet />
    </div>
  )
}

export default Products;