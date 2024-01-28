import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Search for a meal...'
                value={searchQuery}
                onChange={handleInputChange}
            ></input>
        </div>
    );
};

export default SearchBar;