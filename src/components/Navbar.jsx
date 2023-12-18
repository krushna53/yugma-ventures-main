import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../images/yg.png';
import Switch from 'react-switch';
import { IoMdMenu } from "react-icons/io";
const Navbar = ({ toggleTheme }) => {
  const [isAffixed, setAffixed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // New state for menu

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

    scrollToSection(sectionId);
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
          <a href="#"><img src={logo} alt="" /></a>
        </div>
        
        <div className={`main_list ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navlinks">
            <li><a href="/">Home</a></li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('events')}>Events</li>
            <li onClick={() => scrollToSection('founder')}>AboutUs</li>
            <li onClick={() => scrollToSection('contact')} className='contact'>Contact</li>
            
          </ul>
        </div>
        <div className="theme_switch">
              <Switch
                onChange={handleThemeToggle}
                checked={checked}
                height={20}
                width={44}
                borderRadius={15}
                onColor="#ffffff"
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
