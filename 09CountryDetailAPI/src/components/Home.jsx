import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Search from './Search'
import DropDown from './DropDown'
import CountriesContainer from './CountriesContainer'


function Home() {
  const [query, setQuery] = useState("")

  return (
    <div>
    <div className=' flex justify-between mt-10 px-14'>
    <Search setQuery={setQuery} />
    <DropDown/>
    </div>
    <CountriesContainer query={query}/>
    </div>
  )
}

export default Home