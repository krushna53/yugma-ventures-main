// FounderCard.js

import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons
import './FounderCard.css';

const FounderCard = ({ name, post, description, imageUrl, linkedin, twitter }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{post}</p>
        <p>{description}</p>
        <div className="social-icons">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
