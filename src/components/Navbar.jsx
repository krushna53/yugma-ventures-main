import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import your CSS file
import logo from '../images/yugma.png';
import { MdLightMode } from "react-icons/md";

const Navbar = ({ toggleTheme }) => {
  const [isAffixed, setAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAffixed(true);
      } else {
        setAffixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={isAffixed ? 'nav affix' : 'nav'}>
        <div className="container">

            <div className="logo">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><label onClick={toggleTheme}><MdLightMode/></label></li>
                </ul>
            </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
