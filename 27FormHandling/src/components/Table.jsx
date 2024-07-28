import React from 'react'

function Table({expense}) {
    console.log(expense)
  return (
    <div className='mx-7 mt-20'>
        <table className='border w-[500px]'>
            <thead >
                <tr className='bg-slate-400'>
                    <th className='text-start py-1 pl-4'>Title</th>
                    <th className='text-start py-1 pl-4'>
                        <select className='bg-slate-400 outline-none'>
                            <option value="">All</option>
                            <option value="">grocery</option>
                            <option value="">Clothes</option>
                            <option value="">bill</option>
                        </select>
                    </th>
                    <th className='text-start py-1 pl-4'>Amount</th>
                </tr>
            </thead>
            <tbody  >
               {
                  expense.map((data) => (
                <tr key={data.id}>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td> ₹{data.amount}</td>
                </tr>
                    
                  ))
               }
                
            </tbody>
           
        </table>
    </div>
  )
}

export default Table