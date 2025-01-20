import React, { lazy, memo } from 'react';
import { RecipesProvider } from '../../state/RecipesContext';

const NewRecipes = lazy(() => import('./sections/NewRecipes'));

const Home: React.FC = () => {
    return (
        <div className="home-content">
            <RecipesProvider>
                <NewRecipes />
            </RecipesProvider>
        </div>
    );
};

export default memo(Home);