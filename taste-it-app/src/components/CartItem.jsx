import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function CartItem() {
  return (
    <>
        <div className='font-normal flex gap-2 shadow-md rouded p-4 mb-3'>
            <MdDelete className='absolute right-8 text-gray-600 cursor-pointer'/>
            <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
            alt=""
            className='w-[50px] h-[50px]'
            />
            <div>
                <h2>Onion pizza</h2>
                <div className='flex items-center justify-between'>
                    <div>
                        <span className='text-orange-500 font-bold'>₹200</span>
                    </div>
                    <div className='flex gap-2 absolute right-9 text-gray-500 text-sm'>
                    <AiOutlinePlus className='border border-gray-500 p-1 text-xl rounded hover:bg-orange-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer'/>
                    <span>1</span>
                    <AiOutlineMinus className='border border-gray-500 p-1 text-xl rounded hover:bg-orange-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default CartItem