import React, { memo } from 'react';
import '@styles/_recipe-card-skeleton.scss';


const RecipeCardSkeleton: React.FC = () => {
  return (
    <div className="recipe-card-skeleton">
      <div className="recipe-image-skeleton skeleton"></div>
      <div className="recipe-details-skeleton">
        <span className="recipe-name-skeleton skeleton"></span>
        <div className="footer-card-content-skeleton">
          <span className='recipe-rating-skeleton skeleton'></span>
          <span className='like-button-skeleton skeleton'></span>
        </div>
      </div>
    </div>
  );
};

export default memo(RecipeCardSkeleton);
