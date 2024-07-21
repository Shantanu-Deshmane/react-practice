import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Edit from "./pages/Edit";

function App() {

  return (
    <>
    <div className="w-full mb-10 bg-slate-100">
      <p className='text-4xl font-bold py-8 text-center'>Meme Generator</p>
    </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
