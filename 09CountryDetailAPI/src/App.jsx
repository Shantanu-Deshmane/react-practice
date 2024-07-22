import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("isDark")))

  return (
    <>
    <Header mode={[dark, setDark]}/>
    <Outlet context={[dark, setDark]} />
    
    </>
  )
}

export default App
