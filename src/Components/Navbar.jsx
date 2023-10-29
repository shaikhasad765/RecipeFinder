import React from 'react';
import './Assets/CSS/Navbar.css';  
import LogoImage from './Assets/Images/logo.png';

// Navbar Component
const NavBar = ({ onTabChange }) => {
  return (
    // Navigation bar
    <nav className="navbar">
      {/* Logo and Title */}
      <div className="logo-container">
        <img src={LogoImage} alt="Logo" className="logo" />
        <h1 className="logo-text">Recipe Finder - ASAD</h1>
      </div>
      
      {/* Navigation buttons */}
      <div>
        {/* Home button */}
        <button className='btn' onClick={() => onTabChange('home')}>Home</button>
        {/* Favorites button */}
        <button className='btn btn2' onClick={() => onTabChange('favorites')}>Favorites</button>
      </div>
    </nav>
  );
};

export default NavBar;
