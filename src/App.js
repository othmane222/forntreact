//import logo from './logo.svg';
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./components/LoginSignup/ResetPassword";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Work />
              <Testimonial />
              <Contact />
              <button
                className="secondary-button"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </button>
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
