import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Processus from './pages/Processus';
import Dynamique from './pages/dynamique/Dynamique';
import Preservation from './pages/dynamique/Preservation';
import Tourisme from './pages/dynamique/Gare';
import Urbanisation from './pages/dynamique/Urbanisation';
import Intro from './pages/Intro';
import Source from './pages/Source';
import About from './pages/About';
import Cadastre from './pages/Cadastre';
import Today from './pages/dynamique/Today';
import Vin from './pages/Vin';

function App() {
  return (
    <div className="App">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <div className="w-100vh">
        <Home />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Intro />
          <Processus />
          <Cadastre />
          <Dynamique />
          <Tourisme />
          <Urbanisation />
          <Preservation />
          <Today />
          <Vin />

          <Source />
          <About />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
