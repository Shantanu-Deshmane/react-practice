import { useState } from 'react'

import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ProductCard/>
    </>
  )
}

export default App
