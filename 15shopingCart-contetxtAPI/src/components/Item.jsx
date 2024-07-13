import React from 'react'

function Item(props) {
  return (
    <div>
        <h3> {props.name} </h3>
        <p> ${props.price} </p>
        <button>Add to cart</button>
    </div>
  )
}

export default Item