import React from 'react'

function UserPostcard(props) {
  return (
    <>
    <div className='main'>
        <img src={props.data.picture.large} alt="" />
        <h3> <span>Name: </span> {props.data.name.first}</h3>
        <p> <span>Contact: </span> {props.data.phone}</p>
        <p> <span>Address: </span>{props.data.location.city}, {props.data.location.country}</p>
    </div>
    </>
  )
}

export default UserPostcard;