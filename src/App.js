import React from 'react';
import {Routes, Route, Router} from 'react-router-dom';
import HomePage from './components/Home/Home';
import LoginSignup from './components/LoginSignup/LoginSignup';
import ResetPassword from './components/Resetpassword/ResetPassword';
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./router/PrivateRoute";
import AuthProvider from "./hooks/AuthProvider";
import Admin from "./pages/Admin";

// Other imports...

const App = () => {
  return (
      <AuthProvider>
    <Routes>
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin" element={<Admin />} />

        <Route element={<PrivateRoute />}>
        <Route path="/board" element={<DashBoard />} />
        </Route>
    </Routes>
      </AuthProvider>
  );
};

export default App;
