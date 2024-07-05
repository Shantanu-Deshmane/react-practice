import React from 'react'

function Msg() {
    let data = "boy";
  return (
    <>
    {/* Conditional Rendering */}
    {data == "boy"?<h2>Boy</h2>:<h2>Girl</h2> }
    </>
  )
}

export default Msg