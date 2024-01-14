'use client'

// src/App.js

import React, { useEffect } from 'react';
import LandingPage from '@/components/LandingPage';
import './App.css';

function App() {

  useEffect(() => {
    localStorage.setItem('isLoggedIn', false)
  },[])
  
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
