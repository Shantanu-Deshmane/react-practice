import React, { useRef, useState } from 'react'


// useRef is a react hook using that we can take a reference from any element
function HookUseRef() {
    // Accessing the value of input using the useRef Hook
    const inpRef = useRef(null)

    const [data, setData] = useState([])
  return (
    <>
    <input ref={inpRef} type="text"  />
    <button onClick={()=>{setData([...data, inpRef.current.value])}}>Add Data</button>
    
    {data.map((item, index)=>{return <p key={index}>{item}</p>})}
    
    </>
  )
}

export default HookUseRef