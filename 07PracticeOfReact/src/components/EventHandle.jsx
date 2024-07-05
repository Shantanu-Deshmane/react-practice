import React, { useState } from 'react'

function EventHandle() {
    const[num, setNum] = useState(0)
  return (
    // Event Handling with the help of state
    // React UI only get updated when state is changed
    <>
    <p> {num} </p>
    <button onClick={()=>{setNum(num+1)}}>Change</button>
    </>
  )
}

export default EventHandle