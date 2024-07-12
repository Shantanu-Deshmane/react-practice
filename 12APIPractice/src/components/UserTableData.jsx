import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UserTableData() {
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((res)=>res.json())
        .then((data)=>setUserData(data))
    },[])
    console.log(userData)


  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>phone</th>
                    <th>gender</th>
                    <th>Department</th>
                    <th>Ddesignation</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default UserTableData