// Header.js
'use client'
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  
  const logOut = () => {
    localStorage.setItem('jwt', null)
    localStorage.setItem('type', null)
    localStorage.setItem('isLoggedIn', false)
  }

  const getDashboardLink = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('type');

    if (userType === null) {
      return '/';
    }

    if (userType === 'S') {
      return '/admin';
    } 

    return '/dashboard';
  };

  return (
    <header className='header'>
    <div className="logo">
    <a href="/">  
        <img 
            src="/logoheader.png" 
            alt="Logo" 
            className="logo-image"
        />
      </a>
    </div>


      {/* Navigation Buttons */}
      <nav>
        <ul>
          <li><a href={getDashboardLink()}>Home</a></li>
          <li><a href="/roomandsuites">Room & Suites</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {
            localStorage.getItem('isLoggedIn') ? <li><a href="/login">Logout</a></li> : <li><a href="/login" onClick={() => logOut()}>Login</a></li>
          }
          {/* Add Book Now button */}
          
          <li className="book-now"><a href="/addbooking">Book Now</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;