import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WindowWidthContext } from './state/WindowWidthContext';
import { RecipesProvider } from './state/RecipesContext';
import Navbar from './components/shared/Navbar';
import HeroSection from './components/shared/HeroSection';
import MobileNavbar from './components/shared/MobileNavbar';
import Footer from './components/shared/Footer';
import Home from './components/pages/home/Home';
import './styles/App.scss';

const App: React.FC = () => {
  const context = useContext(WindowWidthContext);
    
  if (!context) {
    throw new Error('Navbar must be used within a WindowWidthProvider');
  }
  
  const { windowWidth } = context;

  return (
    <Router basename="/recipe-app">
      
        <RecipesProvider>
          <div className="main-container">
            <Navbar />
            <HeroSection />
            {windowWidth <= 768 && <MobileNavbar />}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </RecipesProvider>
    </Router>
  );
};

export default App;
