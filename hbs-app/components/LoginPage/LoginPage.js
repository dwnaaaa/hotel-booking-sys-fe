'use client'
import React from 'react';
import './LoginPage.css'; // Assuming you have a CSS file for styling
import Layout from '../Layout/Layout';

const LoginPage = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the login logic
    console.log('Form submitted');
  };

  return (
    <Layout>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          {/* <input type="text" id="username" name="username" required /> */}
          <input type="text" id="username" name="username"/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          {/* <input type="password" id="password" name="password" required /> */}
          <input type="password" id="password" name="password"/>
        </div>
        <button type="submit" className='LoginBtn'><a href="/dashboard">Login</a></button>
      </form>
    </div>
    </Layout>
  );
};

export default LoginPage;
