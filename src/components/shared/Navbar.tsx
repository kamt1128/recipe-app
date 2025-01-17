import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/_navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo__recipe-text">Recipe</span>
        <span className="logo__app-text">App</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink className="nav-item__link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-item__link">Vegetarianos</a>
        </li>
        <li className="nav-item">
          <a className="nav-item__link">Platos Principales</a>
        </li>
        <li className="nav-item">
          <a className="nav-item__link">Tortas</a>
        </li>
        <li className="nav-item">
          <a className="nav-item__link">Comida Rápida</a>
        </li>
        <li className="nav-item">
          <a className="nav-item__link">Menú Niños</a>
        </li>
        <li className="nav-item">
          <a className="nav-item__link">Sopas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;