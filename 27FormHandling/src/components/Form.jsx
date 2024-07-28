import React, { useState } from 'react'

function Form({setData}) {

const [expenses, setSetExpenses] = useState({
    title : '',
    category : '',
    amount : '',
}) 

    const handleSubmit = (e) => {
        e.preventDefault()
        setData((prevState) => [...prevState, {...expenses, id:crypto.randomUUID()}])
        setSetExpenses({
            title : '',
            category : '',
            amount : '',
        })
    }


  return (
    <>
        <div className='mx-7 mt-20'>
            <h1 className='text-3xl ml-1 mb-4  font-semibold'>Track Your Expenses</h1>
            <form onSubmit={handleSubmit}  >
                <div className='w-[500px] p-8 bg-slate-200'>

                    <label className='text-md text-gray-800' htmlFor="">Title</label><br />
                    <input 
                    required 
                    className='w-full py-1 mb-3 ' 
                    type="text" 
                    name="title" 
                    value={expenses.title} 
                    onChange={(e) => setSetExpenses((prev) => ({...prev, title : e.target.value}))} /><br />

                    <label className='text-md text-gray-800' htmlFor="">Category</label><br />
                    <select 
                    required 
                    name='category' 
                    className='bg-slate-400 outline-none w-full py-1 mb-3 '
                    value={expenses.category} 
                    onChange={(e) => setSetExpenses((prev) => ({...prev, category : e.target.value}))}>
                            <option value="" hidden>Select Category</option>
                            <option value="Medecine">Medecine</option>
                            <option value="Grocery" >Grocery</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Bill">Bill</option>
                            <option value="Education">Education</option>
                        </select>

                    <label className='text-md text-gray-800' htmlFor="">Amount</label><br />
                    <input 
                    required 
                    className='w-full py-1 mb-3' 
                    type="text" 
                    name="amount" 
                    value={expenses.amount} 
                    onChange={(e) => setSetExpenses((prev) => ({...prev, amount : e.target.value}))}/>

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