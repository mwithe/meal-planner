import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import fetchData from '../components/fetchData';
import { useCart } from '../components/CartContext';

import RecipeIndividual from '../components/RecipeIndividual';

function RecipePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { cart, addToCart } = useCart();
    console.log('Cart', cart)

    const { link } = useParams();

    const url = `http://127.0.0.1:5000/api/data/${link}`;

    // Fetching content from backend API
    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                if (!data) {
                    const result = await fetchData(url);
                    setData(result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDataAsync();
    }, [data]); // Adding 'data' as a dependency will trigger the effect only if 'data' changes


    const handleAddToCart = (id, title, ingredients) => {
        const isInCart = cart.some(recipe => recipe.id === id);

        if (!isInCart) {
            addToCart({ id, title, ingredients });
        } else console.log('Recipe already in cart.')
    }


    if (loading) {
        return (
            <div className='container loading'>
                <p>Loading...</p>
            </div>
        )
    };


    return (
        <div className='container'>
            <Link to="/">Back</Link>
            <RecipeIndividual recipe={data} handleClick={handleAddToCart} />
        </div>
    );
}

export default RecipePage;
