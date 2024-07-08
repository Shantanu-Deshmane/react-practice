import React, { useEffect, useState } from 'react'
 import CountryCard from './CountryCard.jsx'

function CountriesContainer({query}) {
  const [CounteriesData, setCountriesData] = useState([]) 

  useEffect(()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .then((data)=>{
      setCountriesData(data);
    })
  },[])

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