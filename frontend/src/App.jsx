import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';

async function fetchData() {
  const response = await fetch('http://127.0.0.1:5000/api/data');
  const data = await response.json();
  return data.message;
}

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;