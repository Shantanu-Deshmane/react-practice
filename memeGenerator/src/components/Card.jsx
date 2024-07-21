import React from 'react'
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate()
  return (
   
      <div className='w-64 h-100 p-8 shadow-xl mx-10 my-4 rounded-md  bg-white'>
        <img className='w-full h-40' src={props.image} alt={props.title} />
        <div className="body">
          <p className='font-semibold py-4'>{props.title}</p>
          <button onClick={(e) => navigate(`/edit?url=${props.image}`)} className='bg-blue-600 px-6 py-1 rounded-sm text-white'>Edit meme</button>
        </div>
      </div>
  )
}

export default Card