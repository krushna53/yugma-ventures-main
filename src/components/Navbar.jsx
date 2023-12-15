import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../images/yg.png';
import Switch from 'react-switch';

const Navbar = ({ toggleTheme }) => {
  const [isAffixed, setAffixed] = useState(false);
  const [checked, setChecked] = useState(false);

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
        <div className="main_list">
          <ul className="navlinks">
            <li><a href="/">Home</a></li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('events')}>Events</li>
            <li onClick={() => scrollToSection('founder')}>AboutUs</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
            <div className="theme_switch">
              <Switch
                onChange={handleThemeToggle}
                checked={checked}
                height={24}
                width={48}
                borderRadius={15}
                onColor="#00E676"
                offColor="#333"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
