import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
function ProductsList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div >
            <button style={{ backgroundColor: "Black", padding: "5px 30px" }}>
                <NavLink style={{ color: "white", textDecoration: "none" }} to={'/'}>Back</NavLink>
            </button>
            {
                products.map((item) => (
                    <div style={{textAlign:"center", padding:'10px', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px',maxWidth:'500px', margin:'20px 0'}} key={item.id}>
                        <NavLink style={{textDecoration:"none", color:'black', cursor:'pointer'}} to={`/post/${item.id}`}>{item.title}</NavLink>
                    </div>
                ))
            }

            
        </div>
    )
}

export default ProductsList