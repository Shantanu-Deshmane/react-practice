import React from 'react'

function Form({setData}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(getFormData(e.target))
        setData((prevState) => [...prevState, {...getFormData(e.target), id:crypto.randomUUID()}])
    }
const getFormData = (form) => {
        const formData = new FormData(form);
        const data = {}
        for(const [key, value] of formData.entries()){
            data[key] = value
        }
        return data
}

  return (
    <>
        <div className='mx-7 mt-20'>
            <h1 className='text-3xl ml-1 mb-4  font-semibold'>Track Your Expenses</h1>
            <form onSubmit={handleSubmit}  >
                <div className='w-[500px] p-8 bg-slate-200'>
                    <label className='text-md text-gray-800' htmlFor="">Title</label><br />
                    <input required className='w-full py-1 mb-3 ' type="text" name="title" id="" /><br />
                    <label className='text-md text-gray-800' htmlFor="">Category</label><br />
                    <select required name='category' className='bg-slate-400 outline-none w-full py-1 mb-3 '>
                            <option value="" hidden>Select Category</option>
                            <option value="Medecine">Medecine</option>
                            <option value="Grocery" >Grocery</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Bill">Bill</option>
                            <option value="Education">Education</option>
                        </select>
                    <label className='text-md text-gray-800' htmlFor="">Amount</label><br />
                    <input required className='w-full py-1 mb-3' type="text" name="amount" id="" />

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