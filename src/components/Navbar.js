import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/" className="navbar-link">
        Services
      </Link>
      
      <Link to="/Event" className="navbar-link">
        Event
      </Link>
      <Link to="/" className="navbar-link">
        About Us
      </Link>
      <Link to="/" className="navbar-link">
        Contact
      </Link>
      
    </nav>
  );
};

export default Navbar;
