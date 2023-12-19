import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const facebookUrl = "https://www.facebook.com/yourprofile";
  const instagramUrl = "https://www.instagram.com/yourprofile";
  const linkedinUrl = "https://www.linkedin.com/in/yourpage";
  const twitterUrl = "https://twitter.com/yourhandle";

  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer>
      <div className='footer-sec'>
        <h2>Yugma Ventures</h2>
        <div className="icons-social">
          <button onClick={() => handleSocialMediaClick(facebookUrl)}><FaFacebook /></button>
          <button onClick={() => handleSocialMediaClick(instagramUrl)}><FaInstagram /></button>
          <button onClick={() => handleSocialMediaClick(linkedinUrl)}><FaLinkedin /></button>
          <button onClick={() => handleSocialMediaClick(twitterUrl)}><FaTwitter /></button>
        </div>
        <p>© 2023 Yugma Ventures</p>
      </div>
    </footer>
  );
}

export default Footer;
