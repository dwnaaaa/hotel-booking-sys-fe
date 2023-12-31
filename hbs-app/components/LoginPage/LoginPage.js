
'use client'
import React from 'react';
import './LoginPage.css'; // Assuming you have a CSS file for styling
import Layout from '../Layout/Layout';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const router=useRouter();
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the login logic
    console.log('Form submitted');
    router.push('/dashboard');
  };

  return (
    <Layout>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
      {/* <form className="login-form"> */}
        <h1>Log in</h1>
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
        {/* <button type="submit" className='LoginBtn' onClick={() => router.push('/dashboard')}>Login</button> */}
        <button type="submit" className='LoginBtn'>Log in</button>
      </form>
    </div>
    </Layout>
  );
};

export default LoginPage;