import React from 'react'

function CountryCard({name, population, flag, region, capital}) {
    
  return (
    <>
        <div className='w-[250px] mx-4 mt-10 text-sm bg-white rounded-lg overflow-hidden shadow-sm'>
            <a href="/" className='inline-block'>
            <img src={flag} alt= {name + ' flag'}  />
            <div className='px-4 py-4'>
                <h3 className='text-lg font-bold mb-2 '>{name}</h3>

                {/* convert population in proper format using toLocaleString() function*/}
                <p className='py-2'><b className='font-semibold'>Population :</b> {population.toLocaleString('en-IN')}</p>
                <p className='py-2'><b className='font-semibold'>Region :</b> {region}</p>
                <p className='py-2'><b className='font-semibold'>Capital :</b> {capital} </p>
            </div>
            </a>
        </div>
    </>
  )
}

export default CountryCard