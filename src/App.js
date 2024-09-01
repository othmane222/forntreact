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
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';

// Other imports...

const App = () => {
  return (
      <AuthProvider>
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin" element={<Admin />} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/cart' element={<Cart/>} />

        <Route element={<PrivateRoute />}>
        <Route path="/board" element={<DashBoard />} />
        </Route>
    </Routes>
      </AuthProvider>
  );
};

export default App;
