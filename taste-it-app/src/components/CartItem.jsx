import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from '../redux/CartSlice';
import toast from 'react-hot-toast';


function CartItem({img, name, price, qty,id }) {
    const HandleToast = () => {
        return toast(`${name} Removed!`, {
            icon: <MdDelete className='text-red-500 text-xl'/>,
          });
        }

    const dispatch = useDispatch();
  return (
    <>
        <div className='font-normal flex gap-2 shadow-md rouded p-4 mb-3'>
            <MdDelete onClick={e => dispatch(removeItem(id, img, name, price, qty), HandleToast())} className='absolute right-8 text-gray-600 cursor-pointer'/>
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
                    <AiOutlineMinus onClick={() => qty <= 1 ? dispatch(removeItem(id)) : dispatch(decreaseQty({id}))} className='border border-gray-500 p-1 text-xl rounded hover:bg-orange-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer'/>
                    <span>{qty}</span>
                    <AiOutlinePlus onClick={() => dispatch(increaseQty({id}))} className='border border-gray-500 p-1 text-xl rounded hover:bg-orange-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default CartItem