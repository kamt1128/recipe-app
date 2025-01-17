import React from 'react';
import HeroSection from './sections/HeroSection';
import NewRecipes from './sections/NewRecipes';
import '@styles/_home.scss';

const App: React.FC = () => {
return (
    <div className="home-content">
        <HeroSection />
        <NewRecipes />
    </div>
);
};

export default App;