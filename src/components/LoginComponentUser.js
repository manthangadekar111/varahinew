import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginComponentUser = ({username}) => {
    const [logindata, setlogindata] = useState({
        username: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        username: '',
        password: '',
      });
    
      const navigate = useNavigate();
     
    const handleLogin = async (e) => {
        e.preventDefault();
        const checkvalid = checkAllDetails();

        if (checkvalid) {
            try {
                localStorage.setItem('userdata', JSON.stringify(logindata));
                navigate('/dashboarduser');
            } catch (err) {
                console.log('Error:', err);
                alert('Please try again later.');
            }
        }
    };

    const checkAllDetails = () => {
        let checkvalid = true;
        const newErrors = {
            username: '',
            password: '',
        };

        const username = '@gmail.com';
        if (!logindata.username.trim() || !logindata.username.includes('@gmail.com')) {
            newErrors.username = 'Enter a valid email address';
            checkvalid = false;
        }


        if (logindata.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            checkvalid = false;
        }

        setErrors(newErrors);
        return checkvalid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlogindata({
            ...logindata,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-control">
                    <label htmlFor="username">Username</label>
                    <input
                        className="username"
                        name="username"
                        type="email"
                        value={logindata.username}
                        onChange={handleInputChange}
                    />
                    <div className="error">{errors.username}</div>
                </div>
                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input
                        className="password"
                        name="password"
                        type="password"
                        value={logindata.password}
                        onChange={handleInputChange}
                    />
                    <div className="error">{errors.password}</div>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginComponentUser;