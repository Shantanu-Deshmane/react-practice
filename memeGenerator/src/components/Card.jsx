import React from 'react'

function Card(props) {
  return (
    <div className='w-[18rem] p-10 shadow-xl mx-10'>
      <div>
        <img className='w-full' src={props.image} alt={props.title} />
        <div className="body">
          <p>{props.title}</p>
          <button className='bg-blue-600 px-6 py-1 rounded-sm text-white'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Card