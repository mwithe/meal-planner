import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import ShoppingCart from './ShoppingCart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else setIsOpen(false);
    }

    return (
        <div className="header">
            <div>
                <h1>Recipe Scraper</h1>
            </div>
            <div>
                <ShoppingCart visibility={isOpen} recipes={cart} onClose={openCart} />
                <button onClick={openCart} className='button-nav'>
                    <FontAwesomeIcon icon={faShoppingCart} className="header-cart" />
                    <span className="header-cart">{cart.length}</span>
                </button>
            </div>
        </div>
    );
};

export default Header;