import React from 'react'
import { useSelector  } from "react-redux";
import { removeItem } from "../redux/CartSlice";
import { useDispatch } from "react-redux";




function Cart() {
  const dispatch = useDispatch()

  const item = useSelector((state) => state);
  console.log(item)
  const total = item.cart.reduce((a,b) => a + b.price, 0)
  return (
    <div>
        <div >
            <h2>{`Total items= ${item.cart.length} (Rs. ${Math.round(total)}) /-`}</h2>
            <button onClick={e => dispatch(removeItem())}>Remove</button>
        </div>
        
    </div>
  )
}

export default Cart