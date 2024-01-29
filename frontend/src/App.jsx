import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import fetchData from './components/fetchData';

import Home from './pages/Home';
import About from './pages/About';
import Recipe from './pages/Recipe';

function App() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [loading, setLoading] = useState(true);

  const url = 'http://127.0.0.1:5000/';

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        if (!data) {
          const result = await fetchData(url);
          setData(result);
          setFilteredData(result)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [data]);

  const handleSearch = (searchQuery) => {
    const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredData(filteredResults)
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <CartProvider>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path='/' element={<Home data={filteredData} />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/recipe/:link' element={<Recipe />}></Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;