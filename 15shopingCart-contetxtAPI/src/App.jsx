import { useState } from 'react'

import './App.css'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Item name="Iphone 11" price={4000}/>
      <Item name="Pendrive" price={400}/>
      <Item name="HP Victus" price={8000}/>
    </>
  )
}

export default App
