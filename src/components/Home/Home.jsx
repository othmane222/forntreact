import React from "react";
import Navbar from "../Navbar";
import { FiArrowRight } from "react-icons/fi";
import './Home.css';
import About from "../About";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import Categories from "../Categories/Categories";
import Work from "../Work";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* Add your banner image here */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Courses Platform
          </h1>
          <p className="primary-text">
            Test for the quality of the page. Test for the quality.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          {/* Add your image here */}
        </div>
      </div>
      <About />
      <Work />
      <Categories />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
