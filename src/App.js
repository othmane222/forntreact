import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import LoginSignup from './components/LoginSignup/LoginSignup';
// Other imports...

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/home" element={<HomePage />} />
      {/* Other routes... */}
    </Routes>
  );
};

export default App;
