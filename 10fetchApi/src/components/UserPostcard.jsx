import React from 'react'

function UserPostcard({data}) {
  return (
    <>
    <div className='main'>
        <img src={data.picture.large} alt="" />
        <h3> <span>Name: </span> {data.name.first}</h3>
        <p> <span>Contact: </span> {data.phone}</p>
        <p> <span>Address: </span>{data.location.city}, {data.location.country}</p>
    </div>
    </>
  )
}

export default UserPostcard;