import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
// pages 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to react router DOM</h1>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
