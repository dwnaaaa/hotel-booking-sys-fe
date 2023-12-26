// Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <img src="https://i.pinimg.com/564x/de/1e/47/de1e47fb815592eac577b697b3c63248.jpg" alt="Logo" />
      </div>

      {/* Navigation Buttons */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/roomandsuites">Room & Suites</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
          
          {/* Add Book Now button */}
          <li className="book-now"><a href="/addbooking">Book Now</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;