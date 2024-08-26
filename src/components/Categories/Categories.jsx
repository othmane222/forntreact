// components/Categories/Categories.js
import React, { useState } from "react";
import './Categories.css'; // Ensure this path is correct
// Ensure this CSS file exists for styling

const categories = [
  { name: "Web Development", image: "/path-to-web-dev-image.png" },
  { name: "Data Science", image: "/path-to-data-science-image.png" },
  { name: "Machine Learning", image: "/path-to-ml-image.png" },
  { name: "Cybersecurity", image: "/path-to-cybersecurity-image.png" },
  { name: "Cloud Computing", image: "/path-to-cloud-computing-image.png" },
  { name: "AI", image: "/path-to-ai-image.png" },
  { name: "Blockchain", image: "/path-to-blockchain-image.png" },
  { name: "DevOps", image: "/path-to-devops-image.png" },
  { name: "DevOps", image: "/path-to-devops-image.png" },
  { name: "DevOps", image: "/path-to-devops-image.png" },
  { name: "DevOps", image: "/path-to-devops-image.png" },
  { name: "DevOps", image: "/path-to-devops-image.png" },
  // Add more categories as needed
];

const Categories = ({ onClose }) => {
  const [showAll, setShowAll] = useState(false);

  // Number of categories to show initially
  const initialVisibleCount = 6;

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const visibleCategories = showAll ? categories : categories.slice(0, initialVisibleCount);
  const remainingCount = categories.length - initialVisibleCount;

  return (
    <div className="categories-wrapper">
      <div className="categories-header">

        <h1 className="primary-heading" >Explore Categories</h1>
        
      </div>
      <div className="categories-container">
        {visibleCategories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={`${category.name} image`} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
      {categories.length > initialVisibleCount && (
        <div className="more-btn-container">
          <button className="secondary-button" onClick={showAll ? handleShowLess : handleShowMore}>
            {showAll ? "Show Less" : `Show More (${remainingCount} more)`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
