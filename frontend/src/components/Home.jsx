// components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page content.</p>
            <Link to="/about">Go to About Page</Link>
        </div>
    );
}

export default HomePage;
