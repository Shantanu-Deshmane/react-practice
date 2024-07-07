import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import DropDown from './components/DropDown'
import CountriesContainer from './components/CountriesContainer'

function App() {
  const [query, setQuery] = useState("")

  return (
    <>
    <Header/>
    <div className=' flex justify-between mt-10 px-14'>
    <Search setQuery={setQuery} />
    <DropDown/>
    </div>
    <CountriesContainer query={query}/>
    </>
  )
}

export default App
