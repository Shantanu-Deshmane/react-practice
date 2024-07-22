import React from 'react'

function CountryDetailShimmer() {
  return (
    <>
        <div className='flex justify-center'>
                <div className='w-[800px] h-[346px] mx-4 mt-10 text-sm bg-slate-200 rounded-lg overflow-hidden shadow-sm'>
                    <div className=' px-4 py-4'>
                        <p className='py-20 mb-8 bg-slate-300'></p>
                        <h3 className='text-lg font-bold mb-2 bg-slate-300'></h3>
                        <p className='py-4 my-2 bg-slate-300' ><b className='font-semibold'></b></p>
                        <p className='py-4 my-2 bg-slate-300'><b className='font-semibold'></b></p>
                        <p className='py-4 bg-slate-300'><b className='font-semibold'></b></p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CountryDetailShimmer