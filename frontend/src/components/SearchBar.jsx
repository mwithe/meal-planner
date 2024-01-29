import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className='search-bar-container'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-bar-icon' />
            <input className='search-bar-input'
                type='text'
                placeholder='Search for a meal...'
                value={searchQuery}
                onChange={handleInputChange}
            ></input>
        </div>
    );
};

export default SearchBar;