import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipesProvider } from './state/RecipesContext';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './components/pages/home/Home';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <Router basename="/recipe-app">
      <RecipesProvider>
        <div className="main-container">
          <Navbar />
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
