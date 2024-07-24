import React from 'react'
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function Products({data}) {
    const dispatch = useDispatch()
   

    return (
        <>

            {
                data.map((item) => (
                    <div key={item.id} className="card shadow-sm m-2" style={{width: "18rem"}}>
                        <img src={item.image} className="rounded mx-auto d-block card-img-top" style={{width: "12rem", height:"15rem"}} alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="text-danger">{item.price}$</h5>
                        <p className="card-text">{item.description.substring(0,90)}</p>
                        <button onClick={e => dispatch(addItem({name:item.title, price:item.price, imageURL:item.image}))} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                ))
            }
        </>
    )
}

export default Products 