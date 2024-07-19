import React from 'react'
import { Consumer } from './Context'

function Profile() {
  return (
    <div style={{textAlign:"center", marginTop:'50px'}}>
        <b style={{textDecoration:'underline'}}>USER PROFILE</b>
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