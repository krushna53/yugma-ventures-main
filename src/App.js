
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Event from './pages/Event';
import "./App.css";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Event" element={<Event/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
