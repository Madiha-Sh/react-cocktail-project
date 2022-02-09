import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';
import Error from './pages/error';
import SingleCocktail from './pages/singleCocktail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/singleCocktail/:id' element={<SingleCocktail />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;