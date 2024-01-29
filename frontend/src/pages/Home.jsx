import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RecipeCardLarge from '../components/RecipeCardLarge';
import fetchData from '../components/fetchData';

function HomePage({ data }) {


    return (
        <div className='container'>
            <h2>Easy Dinner Recipes</h2>
            {data.map((recipe) => (
                <div className='recipe-cards'>
                    <Link to={`/recipe/${recipe.link}`} key={recipe.id}>
                        <RecipeCardLarge
                            id={recipe.id}
                            title={recipe.title}
                            imageSrc={recipe.image}
                            description={recipe.description}
                            rating={recipe.rating}
                        />
                    </Link>
                </div>
            ))}
            <Link to="/about">Go to About Page</Link> <br></br>
        </div>
    );
}

export default HomePage;
