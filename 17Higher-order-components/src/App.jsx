import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCount from './components/HoverCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickCounter/>
      <HoverCount/>
    </>
  )
}

export default App
