import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
    const params = useParams();
    console.log(params)
  return (
    <div>
        <h3>Inside Products : {params.id}</h3> 
    </div>
  )
}

export default ProductDetails