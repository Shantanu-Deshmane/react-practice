import React from 'react'

function Form() {
  return (
    <>
        <div className='mx-7 mt-20'>
            <h1 className='text-3xl ml-1 mb-4  font-semibold'>Track Your Expenses</h1>
            <form onClick={(e) => e.preventDefault()}  >
                <div className='w-[500px] p-8 bg-slate-200'>
                    <label className='text-md text-gray-800' htmlFor="">Title</label><br />
                    <input className='w-full py-1 mb-3 ' type="text" name="" id="" /><br />
                    <label className='text-md text-gray-800' htmlFor="">Category</label><br />
                    <select className='bg-slate-400 outline-none w-full py-1 mb-3 '>
                            <option value="" hidden>Select Category</option>
                            <option value="">Medecine</option>
                            <option value="" >grocery</option>
                            <option value="">Clothes</option>
                            <option value="">bill</option>
                        </select>
                    <label className='text-md text-gray-800' htmlFor="">Ammount</label><br />
                    <input className='w-full py-1 mb-3' type="text" name="" id="" />

                <div>
                    <button className='bg-slate-500 text-white w-full py-1 mt-4'>Add</button>
                </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Form