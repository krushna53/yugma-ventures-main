// FounderSection.js

import React from 'react';
import FounderCard from './FounderCard';
import './FounderCard.css'

const FounderSection = () => {

    const founders = [
        {
          name: 'SUNIL GOENKA',
          post: 'Co-Founder & CEO',
          description: "Sunil Goenka specializes in business communication services, encompassing PR Branding, Content Strategy, and Customer Connect Initiatives, complemented by his role as a Business Development advisor. With a notable portfolio, he has successfully served over 200 brands within his professional domain. Sunil also holds the esteemed position of curator for the Mumbai Entrepreneurs Award and Kolkata Entrepreneurs Award.The recognition and respect these awards enjoy stem from Sunil's commitment to an organic and meticulous awardee selection process.The recognition and respect these awards enjoy stem from Sunil's commitment to an organic and meticulous awardee selection process.",
          imageUrl: '../../founderImage/SunilGoenka1.png',
          linkedin: 'https://www.linkedin.com/in/sunil-goenka-0283089/',
          // twitter: 'https://twitter.com/johndoe',
        },
    
        {
          name: 'CA SUBHANKAR MONDOL',
          post: 'Co-Founder & CFO',
          description: 'An accomplished Finance and Accounts Techno professional, characterized by a positive outlook, creative mindset, and proficient analytical abilities. With an extensive network in the business landscape, particularly within Financial Institutions, External Rating Analysts, and Valuers of property, projects, and companies, I bring over 30 years of hands-on experience in diverse service profiles across multiple companies since 1992.',
          imageUrl: '../../founderImage/ShubankarMandal1.png',
          linkedin: 'https://www.linkedin.com/in/subhankar-mondol-b897675a/',
          // twitter: 'https://twitter.com/johndoe',
        },
    
        {
          name: 'DEVYANI DEEWANJEE KEMBRAL',
          post: 'Co-Founder & COO',
          description: 'A seasoned Customer Service Manager with a proven track record of achieving impactful results, spanning various sectors such as B2B, e-commerce, and BPO. Proficient in customer service, adept at aligning delivery processes to meet customer requirements and optimize collections. Possesses robust skills in communication, operations, strategic planning, and team building. Holds a management degree from XLRI, complemented by a certification in performance operations management from XLRI-VIL Programs',
          imageUrl: '../../founderImage/devyani_1.png',
          linkedin: 'https://www.linkedin.com/in/devyani-kembral-a9b03128/',
          // twitter: 'https://twitter.com/johndoe',
        },
        
      ];

  return (
    <>
      <div className='founder-card-heading'>Our Founders</div>
      <div className="card-container">
        {founders.map((founder, index) => (
          <FounderCard key={index} {...founder} />
        ))}
      </div>
    </>
  );
};

export default FounderSection;
