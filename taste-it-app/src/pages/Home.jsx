import React from 'react'
import Navbar from '../components/Navbar'
import Catagories from '../components/Catagories'
import ItemCard from '../components/ItemCard'
import ItemContainer from '../components/ItemContainer'
import Cart from '../components/Cart'

function Home() {
  return (
    <div className='mx-6'>
        <Navbar/>
        <Catagories/>
        <ItemContainer/>
        <Cart/>
    </div>
  )
}

export default Home