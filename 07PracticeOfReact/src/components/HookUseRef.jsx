import React, { useRef } from 'react'


// useRef is a react hook using that we can take a reference from any element
function HookUseRef() {
    // Accessing the value of input using the useRef Hook
    const inpRef = useRef(null)
  return (
    <>
    <input ref={inpRef} type="text"  />
    <button onClick={()=>{console.log(inpRef.current.value)}}>Submit</button>
    </>
  )
}

export default HookUseRef