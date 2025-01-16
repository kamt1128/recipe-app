import React from 'react';
import '../styles/_new-recipes.scss';
import { useRecipes } from '../state/RecipesContext';

interface RecipeCardProps {
  image: string;
  title: string;
  spoonacularScore: number;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  spoonacularScore,
  servings,
  readyInMinutes,
  difficulty = 'fácil',
}) => {
  return (
    <div className="recipe-card">
      <div className="card-content">
        <img src={image} alt={title} className="recipe-image" />
         {/* Info without hover */}
        <div className="card-whithout-hover">
          <h3>{title}</h3>
          <div className="recipe-rating">
            <span>⭐ {spoonacularScore.toFixed(1)}</span>
            <button className="like-button">❤️</button>
          </div>
        </div>
         {/* Info in hover */}
        <div className="card-hover">
          <ul className="recipe-details">
            <li>
              <span>Tamaño de la porción:</span> {servings} raciones
            </li>
            <li>
              <span>Tiempo de preparación:</span> {readyInMinutes} minutos
            </li>
            <li>
              <span>Dificultad:</span> {difficulty}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const NewRecipes: React.FC = () => {
  const { data: recipes, error, isLoading } = useRecipes();

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.error('Error fetching recipes:', error);
    return <div>Error loading recipes. Please try again later.</div>;
  }

  return (
    <section className="new-recipes">
      <h2>Nuevas Recetas</h2>
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