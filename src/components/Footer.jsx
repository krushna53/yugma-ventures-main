import React from 'react';
import './Footer.css';
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa";

const Footer = ({facebook, instagram, linkedin, twitter }) => {
    
  return (
    <footer>
    <div className='footer-sec'>
      <h2>Yugma Ventures</h2>
      <div className=".icons-social">
        <button onClick={`location.href = ${facebook}`}><FaFacebook /></button>
        <button onClick={`location.href = ${instagram}`}><FaInstagram /></button>
        <button onClick={`location.href = ${linkedin}`}><FaLinkedin /></button>
        <button onClick={`location.href = ${twitter}`}><FaTwitter /></button>
      </div>
      <p>© 2023 Yugma Ventures</p>
    </div>
    </footer>
  )
}

export default Footer
