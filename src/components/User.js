import React , {useState} from 'react'
import '../index.css'
import DashboardUser from './DashboardUser';
import LoginComponentUser from './LoginComponentUser';

export default function User() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser({ username });
  };

  return (
    <>
      <div className='headinginuserpage'>
        <h2> Welcome to User  page !!!</h2> 
        <h2>Please Login to process !!!</h2> <hr />
      </div>

      <div>
      {user ? (
        <DashboardUser username={user.username} />
      ) : (
        <LoginComponentUser onLogin={handleLogin} />
      )}
    </div>

    </>

  )
}
