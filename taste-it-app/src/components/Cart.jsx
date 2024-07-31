import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa";
import CartItem from './CartItem';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const cartProducts = useSelector(state => state.cart.cart)
  const totalQty = cartProducts.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartProducts.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)

  return (
    <>
      <div className={`cart px-4 py-4 font-semibold fixed top-0 right-0 w-full lg:w-[22vw] h-full overflow-y-auto bg-white ${active ? 'translate-x-0' : 'translate-x-full'}  transition-all duration-500 z-50`}>
        <div className='flex items-center justify-between '>
          <span>My orders</span>
          <IoMdClose onClick={e => setActive(!active)} className='text-orange-500 cursor-pointer rounded border border-orange-500 ' />
        </div>

        {
          cartProducts.length > 0 ? cartProducts.map((e) => <CartItem
            img={e.img}
            name={e.name}
            price={e.price}
            qty={e.qty}
            id={e.id}
            key={e.id}
          />) : <h2 className='text-center mt-8'>Oops! Cart is empty</h2>
        }

        <div className='font-normal fixed top-[80%] bg-white '>
          <h1 className='font-semibold text-gray-500'>item: {totalQty} </h1>
          <h1 className='font-semibold text-gray-500'>Total amount: ₹{totalPrice} </h1>
          <hr className='w-[88vw] lg:w-[19vw] my-4' />
          <button onClick={() => navigate("/success")} className='bg-orange-500 text-white font-semibold w-[88vw] lg:w-[19vw] py-1 rounded'>Checkout</button>
        </div>

        <div>
        </div>
      </div>
      <FaShoppingCart onClick={e => setActive(!active)} className={` ${totalQty > 0 && 'animate-bounce delay-500 transition-all'} fixed bottom-8 right-4 p-2 text-4xl bg-white rounded-full cursor-pointer`} />
    </>
  )
}

export default Cart