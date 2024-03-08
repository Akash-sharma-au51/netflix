import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/navbar.css';
import Home from '../pages/Home';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        
        <Link to="/">
          <img
            src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png"
            alt="logo"
            height="4%"
            width="6%"
          />
        </Link>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/">
        <span><Button variant="contained" color='error'>Knowmore</Button></span>
        </Link>
      </nav>
     
    </div>
  );
};

export default Navbar;
