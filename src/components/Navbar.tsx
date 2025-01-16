import React from 'react';
import '../styles/_navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo__recipe-text">Recipe</span>
        <span className="logo__app-text">App</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Vegetarianos</a></li>
        <li><a href="#">Platos Principales</a></li>
        <li><a href="#">Tortas</a></li>
        <li><a href="#">Comida Rápida</a></li>
        <li><a href="#">Menú Niños</a></li>
        <li><a href="#">Sopas</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;