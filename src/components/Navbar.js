import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/login" style={{ textDecoration: 'none' }} >Login</Link>
                    </li>
                    <li>
                        <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                    </li>
                </ul>
            </nav>
            <div className='heading'>
                <h3>Please Register first  !!!</h3>
            </div>
        </>
    );
};

export default Navbar;
