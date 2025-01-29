import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
