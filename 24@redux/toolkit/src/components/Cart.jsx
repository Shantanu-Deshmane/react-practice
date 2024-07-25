import React from 'react'
import { useSelector  } from "react-redux";
import { removeItem } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch()

  const item = useSelector((state) => state.cart);
  console.log(item)
  const total = item.reduce((a,b) => a + b.price, 0)
  
  return (
        <div >
            <h2>{`Total items= ${item.length} (Rs. ${Math.round(total)}) /-`}</h2>
            <button onClick={e => dispatch(removeItem())}>Remove</button>
        </div>
  )
}

export default Cart 