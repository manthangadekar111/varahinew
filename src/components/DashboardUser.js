import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardUser() {
  const navigate = useNavigate();

  const getuserdata = localStorage.getItem('userdata');
  const userData = getuserdata ? JSON.parse(getuserdata) : null;
  const username = userData ? userData.username : 'Guest';

  const handleUpdateProfile = (updatedData) => {
    const updatedUserData = {
      ...userData,
      ...updatedData,
    };
    localStorage.setItem('userdata', JSON.stringify(updatedUserData));
    navigate('/dashboarduser'); 
  };

  const handleUpdate = () => {
    navigate('/updateuserprofile');
  };

  const backtohome = ()=>{
    navigate('/');
  }
  return (
    <>
      <div className='userdata'>
        <h1>Welcome, {username}!!!</h1>
        <h1>This is Your Dashboard !!!</h1>
        <hr />
        <button onClick={handleUpdate}>
          Update Profile
        </button>
        <button onClick={backtohome}>Back to home </button>
      </div>
      
    </>
  );
}

export default DashboardUser;
