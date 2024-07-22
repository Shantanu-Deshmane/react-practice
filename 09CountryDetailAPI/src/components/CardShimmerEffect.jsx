import React from 'react'

function CardShimmerEffect() {


    return (
        <>
            <div className='flex flex-wrap justify-evenly'>
                {
                //created array of 10 and filled it with 1 to apply map() method
                    new Array(10).fill(1).map((e, i) => {
                        return (
                            <div key={i} className='w-[250px] mx-4 mt-10 text-sm bg-slate-200 rounded-lg overflow-hidden shadow-sm'>
                                <div className='h-[370px] px-4 py-4'>
                                    <p className='py-20 mb-8 bg-slate-300'></p>
                                    <h3 className='text-lg font-bold mb-2 bg-slate-300'></h3>
                                    <p className='py-4 my-2 bg-slate-300' ><b className='font-semibold'></b></p>
                                    <p className='py-4 my-2 bg-slate-300'><b className='font-semibold'></b></p>
                                    <p className='py-4 bg-slate-300'><b className='font-semibold'></b></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default CardShimmerEffect