import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <img src="path/to/your/logo.png" alt="Logo" />
      </div>

      {/* Navigation Buttons */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/roomandsuites">Room & Suites</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;