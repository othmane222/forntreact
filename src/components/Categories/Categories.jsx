import React, { useState, useEffect } from "react";
import './Categories.css';
import LandingNav from "../LandingNav";
import { getCategories } from "../../services/CategoriesService";
import Footer from "../Footer";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initialVisibleCount = 12;

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const visibleCategories = showAll ? categories : categories.slice(0, initialVisibleCount);
  const remainingCount = categories.length - initialVisibleCount;

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="categories-wrapper">
      <LandingNav />
      <div className="categories-header">
        <h1 className="primary-heading">Explore Categories</h1>
      </div>
      <div className="categories-container">
        {visibleCategories.map((category, index) => (
          <div key={index} className="category-card">
            {/* Placeholder image for demonstration */}
            <img src={category.image || '/path-to-default-image.png'} alt={`${category.name} image`} className="category-image" />
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
      <Footer/>
    </div>
  );
};

export default Categories;
