import React from 'react';
import '../styles/styles.css';

const RecipeCardLarge = ({ title, description, imageSrc, rating }) => {
    return (
        <div className='recipe-card'>
            <img src={imageSrc} alt={title} className='card-image' />

            <div className='card-content'>
                <h3 className='recipe-title'>{title}</h3>
                <p className='recipe-description'>{description}</p>
                <p className='recipe-rating'>{rating}</p>
            </div>
        </div>
    );
};

export default RecipeCardLarge;