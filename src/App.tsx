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
      <Navbar />
      <HeroSection />
      <NewRecipes />
      <Footer />
    </RecipesProvider>
  );
};

export default App;
