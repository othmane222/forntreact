// App.js
import React, { useState } from 'react';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  const toggleCartComponent = () => {
    setIsCartVisible(!isCartVisible);
  };

  const toggleCategoriesComponent = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'path_to_image1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'path_to_image2.jpg' },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <Navbar 
        toggleCartComponent={toggleCartComponent} 
        toggleCategoriesComponent={toggleCategoriesComponent} 
      />
      {isCartVisible && (
        <div className="cart-container-wrapper">
          <Cart cartItems={cartItems} onClose={toggleCartComponent} />
        </div>
      )}
      {isCategoriesVisible && (
        <div className="categories-container-wrapper">
          <Categories onClose={toggleCategoriesComponent} />
        </div>
      )}
      <Home />
      <About />
      <Work />
      <Categories />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
