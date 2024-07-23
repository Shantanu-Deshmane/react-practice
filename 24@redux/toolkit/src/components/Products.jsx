import React, { useEffect } from 'react'

import Cart from './Cart'

function Products({data}) {
    

    return (
        <>

            {
                data.map((item) => (
                    <div className="card shadow-sm m-2" style={{width: "18rem"}}>
                        <img src={item.image} className="rounded mx-auto d-block card-img-top" style={{width: "12rem", height:"15rem"}} alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                ))
            }
        </>
    )
}

export default Products 