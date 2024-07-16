import React from 'react'
import CountHOC from './CountHOC'

function ClickCounter({count, IncreamentCount}) {
  return (
    <div>
        <h2>Count is: {count} </h2>
        <button onClick={IncreamentCount}>Click here</button>
    </div>
  )
}

export default CountHOC(ClickCounter,20) 