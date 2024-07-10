import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UserTable() {
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setuserData(data)
            })

    }, [])

    return (
        <>
            <h1>users</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                {
                    userData.map((user) => (
                        <tbody key={user.id}>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </table>
        </>
    )
}

export default UserTable