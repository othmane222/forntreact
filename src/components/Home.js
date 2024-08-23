//import React from "react";
//import BannerBackground from "../components/Assets/home-banner-background.png";
//import BannerImage from "../components/Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite courses plateform
          </h1>
          <p className="primary-text">
            test for the quality of the page test for the Qualtiy
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;