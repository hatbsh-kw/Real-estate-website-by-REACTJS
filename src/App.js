
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Howitwork from './Components/Howitwork';
import About from './Components/About';
import Agent from './Components/Agent';
import Properties from './Components/Properties';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar stays at the top */}
        
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>

        {/* Add all sections in App.js */}
        
        
        <div id="howitwork">
          <Howitwork />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="agent">
          <Agent />
        </div>
        <div id="properties">
          <Properties />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
