import React from 'react';
import '@styles/_new-recipes.scss';
import { useRecipes } from '../../../../state/RecipesContext';
import RecipeCard from '../../../shared/RecipeCard';


const NewRecipes: React.FC = () => {
  const { data: recipes, error, isLoading } = useRecipes();

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.error('Error fetching recipes:', error);
    return <div>Error loading recipes. Please try again later.</div>;
  }

  return (
    <section className="new-recipes">
      <h2 className="new-recipes__title">Nuevas Recetas</h2>
      <div className="recipe-list">
        {recipes.map((recipe: any, index: number) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            title={recipe.title}
            spoonacularScore={recipe.spoonacularScore}
            servings={recipe.servings}
            readyInMinutes={recipe.readyInMinutes}
            difficulty={recipe.difficulty}
          />
        ))}
      </div>
    </section>
  );
};

export default NewRecipes;