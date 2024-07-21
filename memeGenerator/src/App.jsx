import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Edit from "./pages/Edit";

function App() {

  return (
    <>
    <div>
      <p className='text-4xl font-bold p-10 text-center'>Meme Generator</p>
    </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
