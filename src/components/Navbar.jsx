import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../images/yg.png';
import Switch from 'react-switch';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import { IoMdMenu } from "react-icons/io";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
const Navbar = ({ toggleTheme }) => {
  const [isAffixed, setAffixed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(false);
  const location = useLocation(false); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      setAffixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleThemeToggle = (isChecked) => {
    setChecked(isChecked);
    toggleTheme(isChecked ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (sectionId) => {
    if (window.innerWidth <= 768) {
      // Close the menu on mobile when a link is clicked
      setMenuOpen(false);
    }

    // Conditionally navigate based on the current location
    if (location.pathname.startsWith('/event')) {
      // If in the event page, navigate to home
      navigate('/');
      setTimeout(()=>{
        scrollToSection(sectionId);
      },0);
    } else {
      // Otherwise, scroll to the section
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <nav className={isAffixed ? 'nav affix' : 'nav'}>
        <div className="logo">
          <a href="#" aria-label="Yugma Ventures Home" ><img src={logo} alt="" /></a>
        </div>
        
        <div className={`main_list ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navlinks">
            <li><a href="/">Home</a></li>
            <li onClick={() => handleNavLinkClick('services')}>Services</li>
            <li onClick={() => handleNavLinkClick('events')}>Events</li>
            <li onClick={() => handleNavLinkClick('founder')}>AboutUs</li>
            <li onClick={() => handleNavLinkClick('contact')} className='contact'>Contact</li>
            
          </ul>
        </div>
        <div className="theme_switch">
          {checked ? (
            <IoIosMoon size={20} color="#333" />
          ) : (
            <IoIosSunny size={20} color="#333" />
          )}
              <Switch
                onChange={handleThemeToggle}
                checked={checked}
                height={20}
                width={44}
                borderRadius={15}
                onColor="#333"
                offColor="#333"
                checkedIcon={false}
                uncheckedIcon={false}

              />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
