import React from 'react'
import { Consumer } from './Context'

function Profile() {
  return (
    <div>
        <h1>USER PROFILE</h1>
        <Consumer>
            {
                (value) => (
                    <>
                    <p>UserName: {value.name} </p>
                    <p>UserID: {value.id} </p>
                    <p>Address: {value.address} </p>
                    </>
                )
            }
        </Consumer>
    </div>
  )
}

export default Profile