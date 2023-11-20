import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [inputdata, setinputdata] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        role: ''
    });

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        role: ''
    });

    const navigate = useNavigate();

    const handleRegisterdata = async (e) => {
        e.preventDefault();
        const checkvalidOrnot = checkallDetails();
        if (checkvalidOrnot) {
            try {
                const getdatafromstorage = JSON.parse(localStorage.getItem('users')) || [];
                const updatedUsers = [...getdatafromstorage, inputdata];
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                navigate('/login');
            } catch (err) {
                console.log('Error:', err);
                alert('Please try again later.');
            }
        }
    };

    const checkallDetails = () => {
        let checkvalidOrnot = true;
        const newErrors = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            role: '',
        };

        if (!inputdata.firstname.trim()) {
            newErrors.firstname = 'First Name is required';
            checkvalidOrnot = false;
        }

        if (!inputdata.lastname.trim()) {
            newErrors.lastname = 'Last Name is required';
            checkvalidOrnot = false;
        }

        const username = '@gmail.com';
        if (!inputdata.username.trim() || !inputdata.username.includes('@gmail.com')) {
            newErrors.username = 'Enter a valid email address';
            checkvalidOrnot = false;
        }
        //regular expression

        if (inputdata.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            checkvalidOrnot = false;
        }

        if (!inputdata.role.trim()) {
            newErrors.role = 'Choose any one';
            checkvalidOrnot = false;
        }

        setErrors(newErrors);
        return checkvalidOrnot;
    };

    const handlechanges = (e) => {
        const { name, value } = e.target;
        setinputdata({
            ...inputdata,
            [name]: value,
        });
    };

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleRegisterdata}>
                    <h1>Register</h1>
                    <div className="input-control">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            className="firstname"
                            name="firstname"
                            type="text"
                            value={inputdata.firstname}
                            onChange={handlechanges}
                        />
                        <div className="error">{errors.firstname}</div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            className="lastname"
                            name="lastname"
                            type="text"
                            value={inputdata.lastname}
                            onChange={handlechanges}
                        />
                        <div className="error">{errors.lastname}</div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="username">Username</label>
                        <input
                            className="username"
                            name="username"
                            type="email"
                            value={inputdata.username}
                            onChange={handlechanges}
                        />
                        <div className="error">{errors.username}</div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password">Password</label>
                        <input
                            className="password"
                            name="password"
                            type="password"
                            value={inputdata.password}
                            onChange={handlechanges}
                        />
                        <div className="error">{errors.password}</div>
                    </div>
                    <div className="checkfirst">
                        <label>Role :
                            <input
                                className="role"
                                name="role"
                                type="radio"
                                value="reacthero"
                                checked={inputdata.role === 'reacthero'}
                                onChange={handlechanges}
                            /> admin</label>
                        <div className="error">{errors.password}</div>
                        <div className="checksecond">
                            <label htmlFor="role">
                                <input
                                    className="role"
                                    name="role"
                                    type="radio"
                                    value="user"
                                    checked={inputdata.role === 'user'}
                                    onChange={handlechanges}
                                /> user </label>
                            <div className="error">{errors.password}</div>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
};

export default Register;
