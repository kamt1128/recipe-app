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
          src="https://via.placeholder.com/600x400"
          alt="Delicious waffles with berries"
        />
      </div>
    </div>
  );
};

export default HeroSection;