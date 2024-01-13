// src/App.js

import React from 'react';
import LandingPage from '@/components/LandingPage';
import './App.css';

function App() {
  localStorage.setItem('isLoggedIn', false)
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
