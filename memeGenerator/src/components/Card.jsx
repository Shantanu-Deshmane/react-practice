import React from 'react'
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate()
  return (
   
      <div className='w-64 h-80 p-10 shadow-xl mx-10 '>
        <img className='w-full h-40' src={props.image} alt={props.title} />
        <div className="body">
          <p>{props.title}</p>
          <button onClick={(e) => navigate(`/edit?url=${props.image}`)} className='bg-blue-600 px-6 py-1 rounded-sm text-white'>Edit</button>
        </div>
      </div>
  )
}

export default Card