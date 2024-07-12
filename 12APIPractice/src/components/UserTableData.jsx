import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UserTableData() {
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((res)=>res.json())
        .then((data)=>setUserData(data.users))
    },[])
    console.log(userData)


  return (
    <div>
        <p>
            {userData.map((users)=>(
                <p key>{users.firstName}</p>
            ))}
        </p>
    </div>
  )
}

export default UserTableData