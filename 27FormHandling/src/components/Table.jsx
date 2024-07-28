import React from 'react'

function Table({expense}) {
    console.log("exppp",expense)
    const totalAmount = expense.reduce((a, b) => a+ parseInt(b.amount), 0)
    console.log(totalAmount)
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
            <thead>
                <tr>
                    <th className='text-start border'>Total</th>
                    <th className='text-start border'></th>
                    <th className='text-start border'>₹ {totalAmount}</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Table