import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// For routing first install react-router-dom dependencies and then import BrowserRouter from it.
// import { BrowserRouter } from 'react-router-dom'

// latest way of using router-dom
import {  createBrowserRouter, 
          createRoutesFromElements, 
          Route,
          RouterProvider } from 'react-router-dom';

// pages 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ContactUs from './components/ContactUs.jsx';
import Address from './components/Address.jsx';



  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<App/>}>
          {/* index is for Index page or starting Page */}
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} >
             <Route path='contact-us' element={<ContactUs/>}/>
             <Route path='address' element={<Address/>}/>
          </Route>  
       </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
