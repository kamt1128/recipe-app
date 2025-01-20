import React, { memo, useMemo } from 'react';
import '@styles/_new-recipes.scss';
import { useRecipes } from '../../../state/RecipesContext';
import RecipeCard from '../../shared/RecipeCard';
import RecipeCardSkeleton from '../../shared/RecipeCardSkeleton';


const NewRecipes: React.FC = () => {
  const { data: recipes, error, isLoading, numberOfRecords } = useRecipes();

  const skeletons = useMemo(() => 
    Array.from(Array(numberOfRecords).keys()).map((_, index) => (
      <RecipeCardSkeleton key={index} />
    )), [numberOfRecords]);

  if (error) {
    console.error('Error fetching recipes:', error);
    return (
      <section className="new-recipes">
        <h2 className="new-recipes__title new-recipes__title--error">Nuevas Recetas</h2>
        <div className="list-container">
          <div className="recipe-list recipe-list--error">
            <p className='recipe-list__error-message'>Error al cargar recetas. Inténtelo de nuevo más tarde.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="new-recipes">
      <h2 className="new-recipes__title">Nuevas Recetas</h2>
      <div className="list-container">
        <div className="recipe-list">
          {isLoading ? 
            skeletons :
            recipes?.map((recipe: any, index: number) => (
              <RecipeCard
                key={index}
                image={recipe.image}
                title={recipe.title}
                spoonacularScore={recipe.spoonacularScore}
                servings={recipe.servings}
                readyInMinutes={recipe.readyInMinutes}
                difficulty={recipe.difficulty}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default memo(NewRecipes);