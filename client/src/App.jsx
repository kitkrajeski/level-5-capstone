import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Houses from './Components/Houses'

function App() {
 
  return (
    <>
      <Hero />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/houses' element={<Houses />} />
      </Routes>
    </>
  )
}

export default App
