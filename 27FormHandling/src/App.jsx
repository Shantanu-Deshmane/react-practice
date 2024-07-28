import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import expenseData from "./expensesData";

function App() {
  const [data, setData] = useState(expenseData)

  return (
    <>
      <div className='flex justify-evenly items-center'>
        <Form/>
        <Table expense={expenseData}/>
      </div>
    </>
  )
}

export default App
