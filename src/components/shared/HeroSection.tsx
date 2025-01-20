import React, { useEffect, useState } from 'react';
import '@styles/_hero-section.scss';
import imageBanner from '@assets/images/hero-image.png';

const HeroSection: React.FC = () => {
  const [cachedImage, setCachedImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageBanner;
    img.onload = () => setCachedImage(imageBanner);
  }, []);

  return (
    <section className="hero-section">
      <h1 className="hero-text">
        Recetas <span className="hero-text__inner-text">para todos</span>
      </h1>
      <div className="hero-image-content">
        <img
          className="hero-image-content__img"
          src={cachedImage || ''}
          alt="Recetas para todos"
        />
      </div>
    </section>
  );
};

export default HeroSection;