import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function CartItem({img, name, price, qty,}) {
  return (
    <>
        <div className='font-normal flex gap-2 shadow-md rouded p-4 mb-3'>
            <MdDelete className='absolute right-8 text-gray-600 '/>
            <img src={img}
            alt=""
            className='w-[50px] h-[50px]'
            />
            <div>
                <h2>{name}</h2>
                <div className='flex items-center justify-between'>
                    <div>
                        <span className='text-orange-500 font-bold'>₹{price}</span>
                    </div>
                    <div className='flex gap-2 absolute right-9 text-gray-500'>
                    <AiOutlinePlus className='border border-gray-500 p-1 text-xl rounded hover:bg-orange-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer'/>
                    <span>{qty}</span>
                    <AiOutlineMinus className='border border-gray-500 p-1 text-xl rounded hover:bg-orange-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default CartItem