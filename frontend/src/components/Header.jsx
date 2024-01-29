import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onSearch }) => {
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
                <SearchBar onSearch={onSearch} />
            </div>
            <div className='cart-icon-field'>
                <ShoppingCart visibility={isOpen} recipes={cart} onClose={openCart} />
                <button onClick={openCart} className='button-nav-cart'>
                    <FontAwesomeIcon icon={faShoppingCart} className="header-cart" />
                    <span className="header-cart">{cart.length}</span>
                </button>
            </div>
        </div>
    );
};

export default Header;