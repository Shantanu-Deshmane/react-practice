import React from 'react'
import { useState } from 'react'
import Search from './Search'
import DropDown from './DropDown'
import CountriesContainer from './CountriesContainer'
import { useOutletContext } from 'react-router-dom'


function Home() {
  const [dark] = useOutletContext();
  const [query, setQuery] = useState("")

  return (
    <div className={dark ? 'dark' : ''}>
    <div className=' flex justify-between pt-10 px-14'>
    <Search setQuery={setQuery} />
    <DropDown setQuery={setQuery}/>
    </div>
    <CountriesContainer query={query}/>
    </div>
  )
}

export default Home