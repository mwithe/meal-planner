import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Recipe from './components/Recipe';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/recipe/:link' element={<Recipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;