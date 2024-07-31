import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from '../redux/CartSlice';

function ItemCard({ id, img, name, price, rating, desc, HandleToast }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className=' p-4 bg-white rounded shadow-md lg:w-[250px] flex flex-col gap-2'>
                <img className='w-auto h-[180px] lg:h-[140px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt="" />
                <div className='flex justify-between'>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-orange-500 font-semibold'>₹{price}</p>
                </div>
                <div>
                    <p className='text-sm font-normal'>{desc.slice(0, 50)}...</p>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='flex items-center justify-center gap-1 '><FaStar className='text-yellow-400' />{rating}</span>

                    <button
                        onClick={() =>
                            dispatch(addItem({ name, img, id, price, qty: 1 },
                                HandleToast(name)
                            ))}
                        className='bg-orange-500 txt-white text-sm py-1 px-3 rounded text-white'>Add to cart</button>

                </div>
            </div>
        </>
    )
}

export default ItemCard