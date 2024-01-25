import React from 'react';
import '../styles/styles.css';

const RecipeCardLarge = ({ id, title, description, imageSrc, rating }) => {
    return (
        <div className='recipe-card' key={id}>
            <img src={imageSrc} alt={title} className='card-image' width={93} height={84} />

            <div className='card-content'>
                <h3 className='recipe-title'>{title}</h3>
                <p className='recipe-description'>{description}</p>
                <p className='recipe-rating'>{rating}</p>
            </div>
        </div>
    );
};

export default RecipeCardLarge;