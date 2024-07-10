import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UserTable() {
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setuserData(data)
            })

    }, [])

    return (
       <>
        <h1>users</h1>
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {
                userData.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
        </table>
       </>
    )
}

export default UserTable