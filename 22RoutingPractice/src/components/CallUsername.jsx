import React from 'react'
import { useParams } from "react-router-dom";

function CallUsername() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Your Name is: {params.userName} </h1>
        </div>
    )
}

export default CallUsername