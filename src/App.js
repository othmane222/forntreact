//import logo from './logo.svg';
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
