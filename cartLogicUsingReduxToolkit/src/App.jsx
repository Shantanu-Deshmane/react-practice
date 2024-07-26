import './App.css'
// import Cart from './components/Cart'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from './redux/CartSlice'
import { NavLink } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.products.items)

  const array = [
    { id: 1, name: "iPhone 11", price: 42000 },
    { id: 2, name: "Oversize", price: 400 },
    { id: 3, name: "Puma Shoes", price: 2000 },
    { id: 4, name: "Washing Machine", price: 21000 },
    { id: 5, name: "Laptop", price: 60000 },
  ]
  return (
    <>
        <span className='count'>{state.length}</span>
      <header className='cart'>
        <NavLink to={'/cart'} className="fa-solid fa-cart-shopping"></NavLink>
      </header>
      <h1>Products</h1>
      <div className='container'>

        {
          array.map((item) => (
            <div key={item.id} style={{ width: "150px", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "50px 10px", marginBottom: "5px" }}>
              <p className='title'>{item.name}</p>
              <p>Rs. {item.price}</p>
              <button onClick={(e) => dispatch(addItem({ id: item.id, name: item.name, price: item.price }))}>Add to Cart</button>
            </div>

          ))
        }
      </div>
      {/* <Cart/> */}
    </>
  )
}

export default App
