import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutus-container'>
      <h1 className='aboutus-heading'>About Us</h1>
      
      <div className='vision mission-section'>
        <h2>VISION</h2>
        <p>
          At Yugma Ventures, we envision a future where businesses transcend limits, brands resonate with authenticity, and technology becomes a catalyst for unparalleled innovation. Our vision is to be the driving force behind transformative journeys, propelling organizations towards enduring success in the dynamic landscape of business, branding, and technology.
        </p>
      </div>

      <div className='mission mission-section'>
        <h2>MISSION</h2>
        <p>
          Our mission at Yugma Ventures is to empower businesses to reach their zenith by offering comprehensive business, branding, and technology consulting services. Through strategic guidance, creative branding solutions, and cutting-edge technological insights, we are committed to fostering growth, enhancing brand prominence, and ensuring sustainable success for our clients in an ever-evolving global marketplace.
        </p>
      </div>

      <div className='founders-section'>
        <h1 className='founders-heading'>Our Founders</h1>
      </div>
    </div>
  );
};

export default AboutUs;
