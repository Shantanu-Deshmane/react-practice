import React, { useEffect, useState } from 'react'


export const useProducts = () => {
    const [product, setProduct] = useState([]);

    const getProductData = async () =>{
        const promise = await fetch('https://fakestoreapi.com/products')
        const data = await promise.json();
        setProduct(data);
    }

    useEffect(()=>{
        getProductData();
    },[]);

    return {product}
}
