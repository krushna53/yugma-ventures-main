
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Event from './pages/Event';

import './App.css';


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>

      <div className={`App ${theme}`}>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/event/:index" element={<Event />} />
        </Routes>
      </div>

      

    </Router>
  );
};

export default App;
