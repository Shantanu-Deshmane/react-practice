import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import Navbar from './Navbar';
function PostCard() {
    let params = useParams()

    const [itemData, setItemData] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.postId}`)
            .then((response) => response.json())
            .then((data) => setItemData(data))
        }, [])
        if(itemData === null) return <h2>loading....</h2>
        
        return (
            <>
            <Navbar/>
            <button style={{ backgroundColor: "Black", padding: "5px 30px", marginTop:"20px" }}>
                <NavLink style={{ color: "white", textDecoration: "none" }} to={'/productList'}>Back</NavLink>
            </button>

            <div style={{ maxWidth: "400px", textAlign: "center", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", margin: "50px", padding:"20px 0" }}>
                <img style={{ width: "200px" }} src={itemData.image} alt="" />
                <h2>{itemData.title}</h2>
                <p>{itemData.description.substring(0, 200)}</p>
                <h3>{itemData.price}$</h3>
                <button style={{backgroundColor:"blue", padding:'8px 30px', color:'white', border:'0', cursor:'pointer'}}>Add to cart</button>

            </div>
        </>

    )
}

export default PostCard