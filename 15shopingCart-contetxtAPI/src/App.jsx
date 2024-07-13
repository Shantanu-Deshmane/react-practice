import { useState } from 'react'

import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Item name="Iphone 11" price={4000}/>
      <Item name="Pendrive" price={400}/>
      <Item name="HP Victus" price={8000}/>
      <Cart/>
    </>
  )
}

export default App
