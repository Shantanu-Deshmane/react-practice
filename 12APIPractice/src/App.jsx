import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserTableData from './components/UserTableData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserTableData/>
    </>
  )
}

export default App
