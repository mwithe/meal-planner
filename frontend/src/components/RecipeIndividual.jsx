import React from 'react'
import '../styles/styles.css';

const RecipeIndividual = ({ recipe, handleClick }) => {
    const { title, description, id, image, ingredients, method } = recipe;

    return (
        <div className='individual-card'>
            <div className='ind-top-half'>
                <div className='ind-image'>
                    <img src={image} alt={title} className='ind-card-image' width={300} height={270} />
                </div>
                <div className='ind-info'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button onClick={() => handleClick(id, title, ingredients)}>ADD +</button>
                </div>
            </div>
            <div className='ind-bottom-half'>
                <div className='ind-ingredients'>
                    <h4>Ingredients</h4>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </div>
                <div className='ind-method'>
                    <h4>Method</h4>
                    {method.map((step, index) => (
                        <li key={index}>{index + 1}. {step}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeIndividual;