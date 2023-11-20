import React, { useEffect, useState } from 'react';
import "../index.css";

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [save, setSave] = useState(false);
  const [index2, setIndex] = useState(null);
  const [newUserData, setNewUserData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: 'user',
  });

  useEffect(() => {
    const userdatastore = localStorage.getItem('users');
    const users = JSON.parse(userdatastore);

    if (users && Array.isArray(users)) {
      setUserData(users);
    } else if (users) {
      setUserData([users]);
    }
  }, []);

  const filteredUsers = userData.filter((user) => user.role === 'user');

  const deleteUser = (index) => {
    const deletedFromStorage = [...userData];
    deletedFromStorage.splice(index, 1);
    setUserData(deletedFromStorage);
    localStorage.setItem('users', JSON.stringify(deletedFromStorage));
  };

  const updateUser = (index) => {
    setSave(!save);
    setIndex(null)
    localStorage.setItem('users', JSON.stringify(userData));
  };

  const handleInputChange = (key, value, index) => {
    const updatedUserData = [...userData];
    updatedUserData[index][key] = value;
    setUserData(updatedUserData);
    localStorage.setItem('users', JSON.stringify(updatedUserData));
  };

  const addNewUser = () => {
  console.log('Adding new user...');
  const updatedUserData = [...userData, newUserData];
  setUserData(updatedUserData);
  localStorage.setItem('users', JSON.stringify(updatedUserData));
  setNewUserData({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: 'user',
  });
};


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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>
                {index2 === index ? (
                  <input
                    type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={(e) => handleInputChange('firstname', e.target.value, index)}
                  />
                ) : (
                  user.firstname
                )}
              </td>

              <td>
                {index2 === index ? (
                  <input
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={(e) => handleInputChange('lastname', e.target.value, index)}
                  />
                ) : (
                  user.lastname
                )}
              </td>
              <td>
                {index2 === index ? (
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={(e) => handleInputChange('username', e.target.value, index)}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>
                {index2 === index ? (
                  <input
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleInputChange('password', e.target.value, index)}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
                {index == index2 ? (<button onClick={() => updateUser(index)}>save</button>) : (<button onClick={() => {
                  setIndex(index)
                  console.log(index2);
                }} >update</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <button onClick={addNewUser}>Add User</button>
    </div>
  );
};

export default Admin;
