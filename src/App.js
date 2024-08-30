import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import LoginSignup from './components/LoginSignup/LoginSignup';
import ResetPassword from './components/Resetpassword/ResetPassword';
import Home from "./pages/Home";

// Other imports...

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
