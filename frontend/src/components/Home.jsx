import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RecipeCardLarge from './RecipeCardLarge';
import fetchData from './fetchData';

function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = 'http://127.0.0.1:5000/';

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                if (!data) {
                    const result = await fetchData(url);
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
    console.log(data);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page content.</p>
            <Link to="/about">Go to About Page</Link> <br></br>
            <Link to="/recipe">Go to Recipe Page</Link>
            {data.map((recipe) => (
                <Link to={`/recipe/${recipe.link}`}>
                    <RecipeCardLarge
                        key={recipe.id}
                        title={recipe.title}
                        imageSrc={recipe.image}
                        description={recipe.description}
                        rating={recipe.rating}
                    />
                </Link>
            ))}
        </div>
    );
}

export default HomePage;
