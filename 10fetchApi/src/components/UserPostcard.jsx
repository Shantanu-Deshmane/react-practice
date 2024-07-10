import React from 'react'

function UserPostcard(props) {
  return (
    <>
    <div className='main'>
        <img src={props.data.picture.large} alt="" />
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city}, {props.data.location.country}</p>
    </div>
    </>
  )
}

export default UserPostcard;