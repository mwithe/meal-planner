import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RecipeCardLarge from '../components/RecipeCardLarge';
import fetchData from '../components/fetchData';

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

    console.log(data)

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container'>
            <Link to="/about">Go to About Page</Link> <br></br>
            {data.map((recipe) => (
                <Link to={`/recipe/${recipe.link}`} key={recipe.id}>
                    <RecipeCardLarge
                        id={recipe.id}
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
