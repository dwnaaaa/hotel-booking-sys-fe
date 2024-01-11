
'use client'
import React, { useState } from 'react';
import './LoginPage.css'; // Assuming you have a CSS file for styling
import Layout from '../Layout/Layout';
import { useRouter } from 'next/navigation';
import { decode } from 'jsonwebtoken';

const LoginPage = () => {
  const SECRET_KEY = "7132743379727A52363042666C426E39326E4E7434526E786F66516661677743"
  const router=useRouter();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let requestBody = JSON.stringify({
      username: username,
      password: password
    })
    await fetch("http://localhost:8080/hbs/auth/authenticate", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: requestBody
    })
    .then(response => {
      if(response.status == 403) {
        setShowPrompt(true)
      } else {
        response.json().then(json => {
          const jwt = json.token
          const claims = decode(jwt)
          const user = claims.sub
          fetch(`http://localhost:8080/hbs/employee/type/${user}`)
          .then(response => {
            response.json().then(type => {
              localStorage.setItem('jwt', jwt)
              localStorage.setItem('type', type)
            })
          })
        })
        console.log("user authenticated");
        router.push('/dashboard');
      }
    })
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
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          {/* <input type="password" id="password" name="password" required /> */}
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {/* <button type="submit" className='LoginBtn' onClick={() => router.push('/dashboard')}>Login</button> */}
        {
          showPrompt ? <label style={{color: 'red'}}>Incorrect username or password!</label> : null
        }
        <button type="submit" className='LoginBtn'>Log in</button>
      </form>
    </div>
    </Layout>
  );
};

export default LoginPage;