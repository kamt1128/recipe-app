import React, { memo } from 'react';
import '@styles/_mobile-navbar.scss';
import vegetariansIcon from '@assets/images/icon-vegetarians.svg';
import mainRecipesIcon from '@assets/images/icon-main-recipes.svg';
import cakesIcon from '@assets/images/icon-cakes.svg';
import fastFoodsIcon from '@assets/images/icon-fast-foods.svg';
import menuKidsIcon from '@assets/images/icon-menu-kids.svg';
import soupsIcon from '@assets/images/icon-soups.svg';

const MobileNavbar: React.FC = () => {

    return (
      <nav className="mobile-navbar">
          <ul className="mobile-links">
            <li className="mobile-link-item">
              <img src={vegetariansIcon} className="mobile-link-item__icon" loading="lazy" /> 
              <div className="mobile-link-item__text">Vegetarianos</div>
            </li>
            <li className="mobile-link-item">
              <img src={mainRecipesIcon} className="mobile-link-item__icon" loading="lazy" /> 
              <div className="mobile-link-item__text">Principales</div>
            </li>
            <li className="mobile-link-item">
              <img src={cakesIcon} className="mobile-link-item__icon" loading="lazy" /> 
              <div className="mobile-link-item__text">Tortas</div>
            </li>
            <li className="mobile-link-item">
              <img src={fastFoodsIcon} className="mobile-link-item__icon" loading="lazy" /> 
              <div className="mobile-link-item__text">Rápida</div>
            </li>
            <li className="mobile-link-item">
              <img src={menuKidsIcon} className="mobile-link-item__icon" loading="lazy" /> 
              <div className="mobile-link-item__text">Menú Niños</div>
            </li>
            <li className="mobile-link-item">
              <img src={soupsIcon} className="mobile-link-item__icon" loading="lazy" /> 
              <div className="mobile-link-item__text">Sopas</div>
            </li>
          </ul>
      </nav>
    );
  };
  
  export default memo(MobileNavbar);