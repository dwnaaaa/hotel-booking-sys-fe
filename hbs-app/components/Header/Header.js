// Header.js
import React from 'react';
import './Header.css';
import { useForceUpdate } from 'framer-motion';

const Header = () => {
  const userType = localStorage.getItem('type');
  const forceUpdate = useForceUpdate();

  const logOut = () => {
    localStorage.setItem('jwt', null);
    localStorage.setItem('type', null);
    localStorage.setItem('isLoggedIn', false);
    forceUpdate();
  };

  const getDashboardLink = () => {
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
          {/* Show "Logout" when isLoggedIn is true, and "Login" otherwise */}
          {localStorage.getItem('isLoggedIn') === 'true' ? (
            <li><a href="/login" onClick={() => logOut()}>Logout</a></li>
          ) : (
            <li><a href="/login">Login</a></li>
          )}
          {/* Show "Book Now" for specific user types */}
          {(userType === 'F' || userType === 'S') && (
            <li className="book-now"><a href="/addbooking">Book Now</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
