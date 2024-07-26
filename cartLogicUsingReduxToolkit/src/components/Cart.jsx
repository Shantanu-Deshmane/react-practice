import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/CartSlice";

function Cart() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    console.log(state)
    const totalPrice = state.reduce((a, b) => a + b.price, 0)
    
  return (
    <div>
        <h3>{`Products in Cart are: ${state.length}`}</h3>
        <b>{`Total : Rs ${totalPrice} /-`}</b>

        {
            state.map((e, i) => (
                <div key={i} style={{width:"150px", backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "50px 10px", marginBottom:"5px"}}>
                    <p className='title'>{e.name}</p>
                    <p>Rs. {e.price}</p>
                    <button onClick={(e) => dispatch(removeItem())}  className='remove-btn'>Remove</button>

                </div>
            ))
        }

            <div>
        </div>
    </div>
  )
}

export default Cart 