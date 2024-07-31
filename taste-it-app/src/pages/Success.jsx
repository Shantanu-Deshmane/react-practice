import React, { useEffect, useState } from 'react'
import { PacmanLoader } from "react-spinners";

function Success() {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen'>
      {
        loading  ? (<PacmanLoader color="rgb(244, 87, 9)" />) : (
          <div >
          <h1 className='text-3xl font-bold'>Order Successfull!</h1>
          <p className='text-sm p-1'>Your order has been placed successfully!</p>
        </div>
        )
      }
        
        
      </div>
    </>
  )
}

export default Success
