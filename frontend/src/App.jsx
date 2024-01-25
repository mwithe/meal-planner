import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Recipe from './pages/Recipe';

function App() {

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/recipe/:link' element={<Recipe />}></Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;