
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Event from './pages/Event';

import './App.css';
import EventDetail from './pages/EventDetail';


const App = () => {
  // const [theme, setTheme] = useState('light');
  

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    <Router>
      <div className={`App`}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/event/:eventPathName" element={<Event />} />
          <Route path="/eventdetail/:eventPathName" element={<EventDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
