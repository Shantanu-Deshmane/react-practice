import React from 'react'
import { Consumer } from './Context'

function WelcomePage() {
  return (
    <div>
        <h1>Welcome,</h1>
        
            <Consumer>
                {(value) =>(
                    <h2>
                        Name: {value.name}
                    </h2>
                )}
            </Consumer>
        
    </div>
  )
}

export default WelcomePage;