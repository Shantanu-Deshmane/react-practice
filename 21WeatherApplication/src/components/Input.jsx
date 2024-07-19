import React from 'react'

function Input(props) {
  return (
    <div>
        <input type="text" 
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        />
    </div>
  )
}

export default Input