import React, { memo } from 'react';
import '@styles/_hero-section.scss';
import imageBanner from '@assets/images/hero-image.png';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-text">
        Recetas <span className="hero-text__inner-text">para todos</span>
      </h1>
      <div className="hero-image-content">
        <img
          className="hero-image-content__img"
          src={imageBanner}
          alt="Recetas para todos"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default memo(HeroSection);