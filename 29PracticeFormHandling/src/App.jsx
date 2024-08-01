import { useState } from 'react'
import './App.css'
import Form from './Form'
import Display from './Display'

function App() {
  const [entries, setEntries] = useState({})
  console.log("entries ====", entries)

  return (
    <>
     <Form setEntries={setEntries}/>
      <Display entries={entries}/>
    </>
  )
}

export default App
