import React from 'react';
import './AboutUs.css'
import visionImage from '../images/vision.jpg'; // Import your vision image
import missionImage from '../images/mission.jpg';

const AboutUs = () => {
  return (
    <div className='aboutus-container'>

      <h1 className='aboutus-heading'>About Us</h1>

      {/* Vision Section */}
      <div className='vision mission-section'>
      <img className='section-image' src={visionImage} alt='Vision' />
        <div className='section-content'>
          <h2>VISION</h2>
          <p>
            At Yugma Ventures, we envision a future where businesses transcend limits, brands resonate with authenticity, and technology becomes a catalyst for unparalleled innovation. Our vision is to be the driving force behind transformative journeys, propelling organizations towards enduring success in the dynamic landscape of business, branding, and technology.
          </p>
        </div>
        
      </div>

      {/* Mission Section */}
      <div className='mission mission-section'>
        <div className='section-content'>
          <h2>MISSION</h2>
          <p>
            Our mission at Yugma Ventures is to empower businesses to reach their zenith by offering comprehensive business, branding, and technology consulting services. Through strategic guidance, creative branding solutions, and cutting-edge technological insights, we are committed to fostering growth, enhancing brand prominence, and ensuring sustainable success for our clients in an ever-evolving global marketplace.
          </p>
        </div>
        <img className='section-image' src={missionImage} alt='Mission' />
      </div>

      <div className='founders-section'>
        <h1 className='founders-heading'>Our Founders</h1>

      </div>
    </div>
  );
};

export default AboutUs;
