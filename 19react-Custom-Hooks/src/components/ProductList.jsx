import React, { useEffect, useState } from 'react'

function ProductList() {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        getProductData();
    },[]);

    const getProductData = async () =>{
        const promise = await fetch('https://fakestoreapi.com/products')
        const data = await promise.json();
        setProduct(data);
    }

  return (
    <>
       {
        product.map(product => <div> {product.title} </div>)
       } 
    </>    
  )
}

export default ProductList