import React from "react";
const Result = ({marks}) => {
    console.log("Inside Result")
    return(
        <>
        <h1>Marks : {marks} </h1>
        </>
    )
}
export default React.memo(Result);