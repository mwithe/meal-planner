import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

function ShoppingCart({ visibility, recipes, onClose }) {
    return (
        <div className='shopping-cart' style={{ display: visibility ? 'block' : 'none' }}>
            <h1>Shopping Cart</h1>
            <button onClick={onClose}>Close Cart</button>
            {recipes.map((recipe) => (
                <ShoppingCartItem title={recipe.title} ingredients={recipe.ingredients} id={recipe.id} key={recipe.id} />
            ))}
        </div>
    )
}

export default ShoppingCart