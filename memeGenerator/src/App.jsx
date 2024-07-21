import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div>
      <p className='text-2xl font-bold p-10'>Meme Generator</p>
    </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
