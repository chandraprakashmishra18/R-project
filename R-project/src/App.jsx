import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Food from "./components/Food";
import Bollywood from "./components/Bollywood";
import Hollywood from "./components/Hollywood";
import Fitness from "./components/Fitness";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import Hero from './components/Hero';
import Details from './components/Details'

import "./App.css";   
import Details from './components/Details';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;