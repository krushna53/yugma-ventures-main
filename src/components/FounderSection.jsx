// FounderSection.js

import React from 'react';
import FounderCard from './FounderCard';

const FounderSection = ({}) => {

    const founders = [
        {
          name: 'SUNIL GOENKA',
          post: 'Co-Founder & CEO',
          description: 'Sunil Goenka specializes in business communication services, encompassing PR Branding, Content Strategy, and Customer Connect Initiatives, complemented by his role as a Business Development advisor. With a notable portfolio, he has successfully served over 200 brands within his professional domain. Sunil also holds the esteemed position of curator for the Mumbai Entrepreneurs Award and Kolkata Entrepreneurs Award.',
          imageUrl: 'https://yugmav.in/images/SunilGoenka1.png',
          linkedin: 'https://www.linkedin.com/in/johndoe/',
          twitter: 'https://twitter.com/johndoe',
        },
    
        {
          name: 'CA SUBHANKAR MONDOL',
          post: 'Co-Founder & CFO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://yugmav.in/images/ShubankarMandal1_1.png',
          linkedin: 'https://www.linkedin.com/in/johndoe/',
          twitter: 'https://twitter.com/johndoe',
        },
    
        {
          name: 'DEVYANI DEEWANJEE KEMBRAL',
          post: 'Co-Founder & COO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://yugmav.in/images/devyani_1.png',
          linkedin: 'https://www.linkedin.com/in/johndoe/',
          twitter: 'https://twitter.com/johndoe',
        },
        
      ];

  return (
    <div className="card-container">
      {founders.map((founder, index) => (
        <FounderCard key={index} {...founder} />
      ))}
    </div>
  );
};

export default FounderSection;
