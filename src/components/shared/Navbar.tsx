import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/_navbar.scss';
import homeIcon from '@assets/images/icon-home.png';
import { WindowWidthContext } from '../../state/WindowWidthContext';

const Navbar: React.FC = () => {
  const context = useContext(WindowWidthContext);
  
  if (!context) {
    throw new Error('La barra de navegación debe usarse dentro de un WindowWidthProvide');
  }
  
  const { windowWidth } = context;

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo__recipe-text">Recipe</span>
        <span className="logo__app-text">App</span>
      </div>
      {windowWidth > 768 ? (
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
      ) : (
        <NavLink className="nav-item__link" to="/">
          <img src={homeIcon} alt="Home icon" />
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;