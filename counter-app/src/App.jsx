import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] =useState(1)
const addValue = () =>{
  if(counter >= 20){
    alert("Limit of 20 count is exceed")
  }else{ 
    setCounter(counter + 1)
  }

}
const removeValue = () =>{
  if(counter <= 0){
    alert("can not create negative value")
  }else{
    setCounter(counter -1)
  }

}

  return (
    <>
      <h1>Welcome to counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
