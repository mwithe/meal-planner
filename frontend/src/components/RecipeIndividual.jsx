import React from 'react'

const RecipeIndividual = ({ title, description, image, ingredients, method, rating }) => {
    return (
        <div className='individual-card'>
            <div className='ind-image'>
                <img src={image} alt={title} className='ind-card-image' />
            </div>
            <div className='ind-info'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='ind-rating-add'>
                <p>{rating}</p>
                <button>ADD +</button>
            </div>
            <div className='ind-content'>
                <div className='ind-instructions'>
                    <h4>Ingredients</h4>
                    {ingredients.map((ing) => (
                        <li>{ing}</li>
                    ))}
                </div>
                <div className='ind-method'>
                    <h4>Method</h4>
                    {method.map((step, index) => (
                        <li>{index + 1}. {step}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeIndividual;