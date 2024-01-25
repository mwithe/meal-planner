import React from 'react'
import { useCart } from '../components/CartContext';

function ShoppingCartItem({ title, ingredients, id }) {
    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (id) => {
        let recipeId = id;
        removeFromCart(recipeId)
    }

    return (
        <div className='shopping-cart-item' key={id}>
            <h5>{title}</h5>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
        </div>
    )
}

export default ShoppingCartItem