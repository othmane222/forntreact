//import React from "react";
import cc from "../components/Assets/aaa.webp";
import vv from "../components/Assets/learn.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const categories = [
  { name: "Web Development", image: "/path-to-web-dev-image.png" },
  { name: "Data Science", image: "/path-to-data-science-image.png" },
  { name: "Machine Learning", image: "/path-to-ml-image.png" },
  { name: "Cybersecurity", image: "/path-to-cybersecurity-image.png" },
  // Add more categories as needed
];

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
         
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
         
        </div>
      </div>

      
    </div>
  );
};

export default Home;
