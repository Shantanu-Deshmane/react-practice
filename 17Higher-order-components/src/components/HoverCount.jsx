import React, { useState } from 'react'

function HoverCount() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h2>Count is: {count} </h2>
        <button onMouseOver={()=>setCount(count+2)}>Hover here</button>
    </div>
  )
}

export default HoverCount 