import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewRecipes from './components/NewRecipes';
import Footer from './components/Footer';
import './styles/App.scss';
import { RecipesProvider } from './state/RecipesContext';

const App: React.FC = () => {
  return (
    <RecipesProvider>
      <div className="main-container">
        <Navbar />
        <HeroSection />
        <NewRecipes />
        <Footer />
      </div>
    </RecipesProvider>
  );
};

export default App;
