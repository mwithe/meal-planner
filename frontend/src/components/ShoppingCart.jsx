import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

function ShoppingCart({ visibility, recipes, onClose }) {

    return (
        <div className='shopping-cart' style={{ display: visibility ? 'block' : 'none' }}>
            <div className='shopping-cart-header'>
                <h1>Shopping Cart</h1>
            </div>
            {recipes.length === 0 ? <p>No recipes in cart.</p> :
                <div className='shopping-cart-contents'>
                    {recipes.map((recipe) => (
                        <ShoppingCartItem title={recipe.title} ingredients={recipe.ingredients} id={recipe.id} key={recipe.id} />
                    ))}
                </div>
            }
        </div>
    )
}

export default ShoppingCart