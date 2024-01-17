import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RecipeCardLarge from './RecipeCardLarge';
import fetchData from './fetchData';

function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                if (!data) {
                    const result = await fetchData();
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

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page content.</p>
            <Link to="/about">Go to About Page</Link>
            {data.map((recipe) => (
                <RecipeCardLarge
                    title={recipe.title}
                    imageSrc={recipe.image}
                />
            ))}
        </div>
    );
}

export default HomePage;
