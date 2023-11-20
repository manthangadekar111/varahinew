import React, { useEffect, useState } from 'react';
import "../index.css";
const Admin = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userdatastore = localStorage.getItem('users');
    const users = JSON.parse(userdatastore);
    console.log(users);

    if (users && Array.isArray(users)) {
      setUserData(users);
    } else if (users) {
      setUserData([users]);
    }
  }, []);

  const filteredUsers = userData.filter((user) => user.role === 'user');

  return (
    <div className='userdata'>
      <h1>Welcome, Admin !!!</h1>
      <h1>This is Your Dashboard !!!</h1>
      <hr />
      <h1>User data </h1>
      <table border="2">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
            
          ))}
          
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default Admin;
