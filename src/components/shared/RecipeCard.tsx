import React from 'react';
import '@styles/_recipe-card.scss';
import iconStar from '@assets/images/icon-star.svg';
import iconHeart from '@assets/images/icon-heart.svg';
import iconChefHat from '@assets/images/icon-chef-hat.svg';
import iconClock from '@assets/images/icon-clock.svg';
import iconPortion from '@assets/images/icon-portion.svg';


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
      {/* Recipe image */}
      <div className="recipe-image">
        <img src={image} alt={title} className="recipe-image__img" loading="lazy" />
      </div>
      <div className="card-content">
        {/* Info without hover */}
        <div className="content-whithout-hover">
          <div className="recipe-details">
            <h3 className="recipe-name">
              <span className="recipe-name__text1">{title.split(' ')[0].slice(0, 7)}</span>
              <span className="recipe-name__text2">{title.split(' ')[1].slice(0, 7)}</span>
            </h3>
            <div className="footer-card-content">
              <span className='recipe-rating'>
                <img src={iconStar} alt='Icon star' className='recipe-rating__icon' loading="lazy" /> {(spoonacularScore * 5 / 100).toFixed(1)}
              </span>
              <img src={iconHeart} alt='Icon heart' className='like-button' loading="lazy"/>
            </div>
          </div>
        </div>
        {/* Info in hover */}
        <div className="content-hover">
          <ul className="recipe-details">
            <li className='details-info'>
              <img src={iconPortion} alt="Chef's hat" className="details-info__icon" loading="lazy" />
              <span className="details-info__label">Tamaño de la porción</span>
              <span className="details-info__value">{servings} raciones</span>
            </li>
            <li className='details-info'>
              <img src={iconClock} alt="Chef's hat" className="details-info__icon" loading="lazy" />
              <span className="details-info__label">Tiempo de preparación</span>
              <span className="details-info__value">{readyInMinutes} minutos</span>
            </li>
            <li className='details-info'>
              <img src={iconChefHat} alt="Chef's hat" className="details-info__icon" loading="lazy" />
              <span className="details-info__label">Dificultad</span>
              <span className="details-info__value">{difficulty}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
