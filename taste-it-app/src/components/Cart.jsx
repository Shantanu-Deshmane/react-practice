import React from 'react'
import {IoMdClose} from 'react-icons/io'
import CartItem from './CartItem';


function Cart() {
  return (
    <>
        <div className='cart px-4 py-4 font-semibold fixed top-0 right-0 w-full lg:w-[22vw] h-full overflow-y-scroll scroll-smooth bg-white'>
            <div className='flex items-center justify-between '>
                <span>My orders</span>
                <IoMdClose className='cursor-pointer rounded border border-gray-500 '/>
            </div>

            <div className='font-normal fixed bottom-2  h-28 bg-white z-40 '>
                <h1 className='font-semibold text-gray-500'>item: </h1>
                <h1 className='font-semibold text-gray-500'>Total amount: </h1>
                <hr className='w-[88vw] lg:w-[19vw] my-4' />
                <button className='bg-orange-500 text-white font-semibold w-[88vw] lg:w-[19vw] py-1 rounded'>Checkout</button>
            </div>
            
            <div>
            
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>

        </div>
    </>
  )
}

export default Cart