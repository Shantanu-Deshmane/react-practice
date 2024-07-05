import React from 'react'

// function PassUsingProps(props) {

// destrucuring the props value
function PassUsingProps({heading}) {
  return (
    <>
    {/* Using props we can access properties */}
    {/* <h1> {props.heading} </h1> */}

    {/* Accessing props value directly */}
    <h1> {heading} </h1>
    </>
  )
}

export default PassUsingProps