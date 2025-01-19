import React from 'react';
import NewRecipes from './sections/NewRecipes';
import '@styles/_home.scss';

const App: React.FC = () => {
return (
    <div className="home-content">
        <NewRecipes />
    </div>
);
};

export default App;