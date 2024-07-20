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
        <div>
            {
                products.map((item) => (
                    <div style={{padding:'10px'}} key={item.id}>
                        <NavLink style={{textDecoration:"none", color:'black', cursor:'pointer'}} to={`/post/${item.id}`}>{item.title}</NavLink>
                    </div>
                ))
            }

            <button style={{ backgroundColor: "Black", padding: "5px 30px" }}>
                <NavLink style={{ color: "white", textDecoration: "none" }} to={'/'}>Back</NavLink>
            </button>
        </div>
    )
}

export default ProductsList