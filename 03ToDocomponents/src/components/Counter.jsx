import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h2>Count : {counter}</h2>
        
        <p>Number is : {counter % 2 == 0 ?'Even' : 'odd'}</p>
        <button className='bg-white text-sm px-2 mx-2' onClick={()=>{setCounter(counter+1)}}>Increase</button>
        <button className='bg-white text-sm px-2 mx-2'  onClick={()=>{setCounter(counter-1)}}>decrease</button>
        <button className='bg-white text-sm px-2 mx-2'  onClick={()=>{setCounter(counter-2)}}>decrease2</button>
    </div>
  )
}

export default Counter