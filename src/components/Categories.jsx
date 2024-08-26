// components/Categories/Categories.js
import React, { useState } from "react";
// Ensure this CSS file exists for styling

const categories = [
  { name: "Web Development", image: "/path-to-web-dev-image.png" },
  { name: "Data Science", image: "/path-to-data-science-image.png" },
  { name: "Machine Learning", image: "/path-to-ml-image.png" },
  { name: "Cybersecurity", image: "/path-to-cybersecurity-image.png" },
  // Add more categories as needed
];

const Categories = ({ onClose }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="categories-wrapper">
      <div className="categories-header">
        <h1 className="primary-heading">Explore Categories</h1>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className={`categories-container ${showMore ? 'show-more' : ''}`}>
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={`${category.name} image`} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
      <button className="more-btn" onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Categories;
