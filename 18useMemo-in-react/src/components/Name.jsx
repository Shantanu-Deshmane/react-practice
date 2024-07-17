import React from "react";

const Name = ({name}) => {
    console.log("Inside Name")
    return(
        <>
        <h1>Name is : {name} </h1>
        </>
    )
}
export default React.memo(Name);