import React, { useEffect, useState } from 'react'

function CountryDetail() {
    const countryName = new URLSearchParams(location.search).get('name')

    const [countryData, setCountryData] = useState({})

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res)=>res.json())
        .then(([data])=>{
            setCountryData({
                name:data.name.common,
                population:data.population.toLocaleString('en-IN'),
                region:data.region,
                subRegion:data.subregion,
                capital:data.capital,
                flags:data.flags.svg,
                nativeName:Object.values(data.name.nativeName)[0].common,
                currencies:Object.values(data.currencies)[0].name,
                languages:Object.values(data.languages).join(", "),

            })
        })
    
    },[])
    return (
        <>
            <div >
                <span >
                    <i className='fa-solid fa-arrow-left mt-5 px-4  cursor-pointer bg-white mx-8 py-2 lowercase text-sm'>&nbsp; <span className='lowercase'>back</span></i>
                </span>

                <div className='flex justify-center'>
                    <div className='flex flex-wrap w-[800px] mt-20 px-4  items-center'>
                        <img className='w-[400px] my-10' src={countryData.flags} alt="" />
                        
                        <div className='ml-20'>
                            <h1 className='text-3xl mb-6 font-semibold'>{countryData.name}</h1>
                            <div className='text-sm'>
                                <p>
                                    <b>Native Name: </b>
                                    <span>{countryData.nativeName}</span>
                                </p>
                                <p>
                                    <b>Population: </b>
                                    <span>{countryData.population}</span>
                                </p>
                                <p>
                                    <b>Region: </b>
                                    <span>{countryData.region}</span>
                                </p>
                                <p>
                                    <b>Sub Region: </b>
                                    <span>{countryData.subRegion}</span>
                                </p>
                                <p>
                                    <b>Capital: </b>
                                    <span>{countryData.capital}</span>
                                </p>
                                <p>
                                    <b>Curencies: </b>
                                    <span>{countryData.currencies}</span>
                                </p>
                                <p>
                                    <b>Languages: </b>
                                    <span>{countryData.languages}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetail