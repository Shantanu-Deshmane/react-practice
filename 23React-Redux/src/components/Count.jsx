import React from "react";
import { useSelector } from 'react-redux'


const Count  = () => {
    const counter = useSelector((state) => state)
    return (
        <>
            <h1>Count : {counter}</h1>
        </>
    )
}
export default Count; 