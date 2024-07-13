import React, {useContext} from 'react'
import { CartContext } from '../context/Cart.jsx'


function Item(props) {
const cart = useContext(CartContext)

  return (
    <div>
        <h3> {props.name} </h3>
        <p> ${props.price} </p>
        <button onClick={() => cart.setItems([...cart.items,
             {name : props.name, price : props.price} ])}>Add to cart</button>
    </div>
  )
}

export default Item