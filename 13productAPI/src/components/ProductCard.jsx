import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ProductCard() {
    const [productData, setProductData] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setProductData(data))
    },[])

  return (
    <div className='flex flex-wrap justify-evenly' >
        {productData.map((item)=>{
          return(
            <>
              <div className='w-[550px] mx-4 mt-10 text-sm bg-white rounded-lg overflow-hidden drop-shadow-md flex'  >
              <img className=' w-[250px] h-[250px] p-4' src={item.image} alt="/"  />

            <div className='px-4 py-4 text-center '>
                <h3 className='text-lg font-bold mb-2 '>{item.title}</h3>
                <p className='py-2 text-2xl text-blue-400  font-bold'>{`$${item.price}`}</p>
                <p className='py-2'><b>category : </b>{item.category}</p>

              <div className='flex justify-center gap-2 items-end'>
                <button className='bg-blue-600 px-8 py-2 text-white '>Buy</button>
                <button className='bg-transparent px-8 py-2 border text-black ' >Add to cart</button>
              </div>
            </div>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default ProductCard