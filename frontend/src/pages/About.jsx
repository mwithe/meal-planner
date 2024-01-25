// components/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>About Page</h1>
            <p>To be added: </p>
            <ul>
                <li>Persistent storage of state via redux or database for storing list items</li>
                <li>Frontend styling</li>
                <li>Error handling</li>
                <li>Additional categories of food on home page</li>
            </ul>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}

export default AboutPage;
