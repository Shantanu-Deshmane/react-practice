import React from 'react'

function Display({entries}) {
    console.log(entries.Name, "from display")
  return (
    <>
        <h1>Entries added</h1>

      
                <div>
                    <p>Name- {entries.Name}</p>
                    <p>Age- {entries.Age}</p>
                    <p>Qualification- {entries.Qualification}</p>
                </div>
         
    </>
  )
}

export default Display