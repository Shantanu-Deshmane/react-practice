import React from "react";
import { useMemo } from "react";
const Result = ({marks, subject}) => {
const percentage = useMemo(()=>{
    console.log("Insside useMemo")
    return  (marks*100)/100
}, [marks])

    console.log("Inside Result")
    return(
        <>
        <h1>Marks : {marks} </h1>
        <h1>Percentage : {percentage}% </h1>
        <h1>For Subject : {subject} </h1>
        </>
    )
}
export default Result;
// export default React.memo(Result);