import React from 'react';
import '../styles/_hero-section.scss';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Recetas <span>para todos</span></h1>
      </div>
      <div className="hero-image">
        <img
          src="assets/hero-image.png"
          alt="Recetas para todos" 
        />
      </div>
    </div>
  );
};

export default HeroSection;