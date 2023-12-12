import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import ScrollComponent from './ScrollComponent';

const Navbar = () => {
  return (
    <div>
    <ScrollComponent/>
    <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul className="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
