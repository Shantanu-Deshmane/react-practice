import './App.css'
import Cart from './components/Cart';
import Products from './components/Products'
import { useEffect, useState } from "react";

function App() {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductData(data))
  }, [])

  return (
    <>
      <Cart />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        <Products data={productData} />
      </div>

    </>
  )
}

export default App
