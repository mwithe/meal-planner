import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import fetchData from './fetchData';

function RecipePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { link } = useParams();

    const url = `http://127.0.0.1:5000/api/data/${link}`;


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
    console.log('DATA FE: ', data);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Recipe Page</h1>
            <p>This is the recipe page content.</p>
            <Link to="/">Go to Home Page</Link>
            <p>{data.description}</p>
        </div>
    );
}

export default RecipePage;
