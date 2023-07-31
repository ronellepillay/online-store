import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import ProductList from './ProductList';
import LegalPage from './components/LegalPage';
import InterestCalculator from './components/InterestCalculator'; // Import the new component

function App() {
  return (
    <div>
      {/* Header component to display the header section */}
      <Header isLoggedIn={false} />
      
      {/* Navigation component to display the navigation menu */}
      <Navigation />
      
      {/* React Router configuration */}
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route for the user profile page */}
        <Route path="/profile" element={<UserProfile />} />
        
        {/* Route for the shop page */}
        <Route path="/shop" element={<ProductList />} />
        
        {/* Route for the legal page */}
        <Route path="/legal" element={<LegalPage />} />

        {/* Route for the interest calculator */}
        <Route path="/interest-calculator" element={<InterestCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
