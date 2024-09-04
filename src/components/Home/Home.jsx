// src/components/Home.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import LandingNav from "../LandingNav";
import MainSection from "../MainSection";
import Features from "../Features";
import Stats from "../Stats";
import Testimonial from "../Testimonial";
import CallToAction from "../CallToAction";
import About from "../About";
import Work from "../Work";
import Pricing from "../Pricing";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleAddCourse = () => {
    navigate('/add-course'); // Route to the Add Course form
  };

  return (
    <div>
      <LandingNav />
      <MainSection />
      <Features />
      <Stats />
      <Testimonial />
      <CallToAction />
      <About />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Home;
