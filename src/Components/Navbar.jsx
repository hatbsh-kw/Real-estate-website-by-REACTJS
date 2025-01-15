import React from 'react';
import logo from '../images/logo1.png';

function Navbar() {
  return (
    <nav>
      <a href='#' className='logo'>
        <img src={logo} alt="logo" />
      </a>
      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label htmlFor="menu-btn" className='menu-icon'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><a href="#header" className='active'>Home</a></li> {/* Target home section */}
        <li><a href="#howitwork">How It Works</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#agent">Agent</a></li>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#properties" className='property'>Properties</a>
    </nav>
  );
}

export default Navbar;
