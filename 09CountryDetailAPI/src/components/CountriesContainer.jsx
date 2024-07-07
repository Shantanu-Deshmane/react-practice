import React, { useState } from 'react'
import CounteriesData from '../CountriesData.js'
import CountryCard from './CountryCard.jsx'

function CountriesContainer({query}) {
   
  // const contriesSearch = CounteriesData.filter((country)=>{
  //   return country.name.common.toLowerCase().includes("india");
  //   })
  //   console.log(contriesSearch)

return (
  <>
  <div className='flex flex-wrap justify-evenly'>
    {CounteriesData.filter(country => country.name.common.toLowerCase().includes(query)).map((country)=>{

    return <CountryCard 
      key={country.name.common}
      name={country.name.common} 
      population={country.population} 
      flag={country.flags.svg} 
      region={country.region} 
      capital={country.capital}  
    />
  })}
  </div>
  </>
  )
}

export default CountriesContainer