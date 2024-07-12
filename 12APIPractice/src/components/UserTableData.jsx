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

  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Postal Code</th>
                    <th>gender</th>
                    <th>Department</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
            {userData.map((user) => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address.address} {user.address.city}</td>
                <td>{user.address.postalCode}</td>
                <td>{user.gender}</td>
                <td>{user.company.department}</td>
                <td>{user.company.title}</td>
                </tr>
        ))}
            </tbody>
        </table>
    </div>
  );
}

export default UserTableData