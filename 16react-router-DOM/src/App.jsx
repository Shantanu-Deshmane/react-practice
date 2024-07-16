import './App.css'

import {Routes, Route, Outlet} from 'react-router-dom'

// // pages "OLD WAY --> "
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

// Components
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className='Container'>
        <header>
          <NavBar/>
        </header>
      </div>
      <div className=''>
        <h1>Welcome to react router DOM...</h1>

        <Outlet/>
        {/* OLD WAY --> <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />  
        </Routes> */}
      </div>
    </>
  )
}

export default App
