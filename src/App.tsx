import React, { lazy, memo, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WindowWidthContext } from './state/WindowWidthContext';
import { TABLE_BREAKPOINT } from './components/shared/constants';
import './styles/App.scss';

const Loading = lazy(() => import('./components/shared/Loading'));
const Navbar = lazy(() => import('./components/shared/Navbar'));
const HeroSection = lazy(() => import('./components/shared/HeroSection'));
const MobileNavbar = lazy(() => import('./components/shared/MobileNavbar'));
const Home = lazy(() => import('./components/pages/Home'));
const Footer = lazy(() => import('./components/shared/Footer'));

const App: React.FC = () => {
  const context = useContext(WindowWidthContext);
    
  if (!context) {
    throw new Error('La App debe usarse dentro de un WindowWidthProvide');
  }
  
  const { windowWidth } = context;

  return (
    <Router basename="/recipe-app">
      <div className="main-container">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <HeroSection />
          {windowWidth <= TABLE_BREAKPOINT && <MobileNavbar />}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default memo(App);
