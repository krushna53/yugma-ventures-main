import React from 'react';
import './AboutUs.css';
import visionImage from '../images/services2.jpg';
import missionImage from '../images/mission3.jpg';

const AboutUs = () => {
  return (
    <div className='aboutUs-container'>
      <h1 className='aboutUs-heading'>About Us</h1>
      <div className='Vision'>
      <div className='image-container'>
          <img className='section-image' src={visionImage} alt='Vision' />
        </div>
        <div className='aboutUs-content'>
          <h1>Vision</h1>
          <p>
            At Yugma Ventures, we envision a future where businesses transcend
            limits, brands resonate with authenticity, and technology becomes a
            catalyst for unparalleled innovation. Our vision is to be the driving
            force behind transformative journeys, propelling organizations
            towards enduring success in the dynamic landscape of business,
            branding, and technology.
          </p>
        </div>
        
      </div>
      <div className='Mission'>
        
        <div className='aboutUs-content'>
          <h1>Mission</h1>
          <p>
            Our mission at Yugma Ventures is to empower businesses to reach
            their zenith by offering comprehensive business, branding, and
            technology consulting services. Through strategic guidance, creative
            branding solutions, and cutting-edge technological insights, we are
            committed to fostering growth, enhancing brand prominence, and
            ensuring sustainable success for our clients in an ever-evolving
            global marketplace.
          </p>
        </div>
        <div className='image-container'>
          <img className='section-image' src={missionImage} alt='Mission' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
