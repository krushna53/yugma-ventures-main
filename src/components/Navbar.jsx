import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../images/yg.png';
import Switch from 'react-switch';

const Navbar = ({ toggleTheme }) => {
  const [isAffixed, setAffixed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAffixed(true);
      } else {
        setAffixed(false);
      }
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

  return (
    <div>
      <nav className={isAffixed ? 'nav affix'  : 'nav'}>
          <div className="logo">
            <a href="#"><img src={logo} alt="" /></a>
          </div>
          <div className="main_list">
            <ul className="navlinks">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
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
