import React, { useState } from 'react'
import PassUsingProps from './PassUsingProps'

function EventHandle() {
    const[num, setNum] = useState(0)
  return (
    // Event Handling with the help of state
    // React UI only get updated when state is changed
    <>

    {/* Passing property */}
    <PassUsingProps heading = "Practice makes man perfect.."/>
    <p> {num} </p>
    <button onClick={()=>{setNum(num+1)}}>Change</button>
    </>
  )
}

export default EventHandle