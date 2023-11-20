
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';
import './index.css'
import DashboardUser from './components/DashboardUser';
import UpdateProfileuser from './components/UpdateProfileuser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path='/updateuserprofile' element={<UpdateProfileuser />} />
        <Route path='/dashboarduser' element={<DashboardUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
