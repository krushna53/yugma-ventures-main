import React from 'react'
import SimpleCarousel from '../components/SimpleCarousel'
import ServiceCards from '../components/ServiceCards'
import Contact from '../components/Contact'

import EventCardBlock from '../components/EventCardBlock';
// import FounderCard from '../components/FounderCard';
import FounderSection from '../components/FounderSection';

// import Navbar from '../components/Navbar'


import AboutUs from '../components/AboutUs';

const Home = () => {

  const events = [
    {
      name: 'Learning in Web3 and Blockchain',
      imageUrl: 'https://wp.mehedidb.com/utech/wp-content/uploads/elementor/thumbs/Technology__-11-pepn1lkx1z8urolwviw08mbshux4t0dfa5p9kxxoxc.jpg',
      date: 'Jan 1',
      place: 'Viman nagar, Pune',
      tag: 'upcoming',
    },
    {
      name: 'Understanding of Web Development',
      imageUrl: 'https://wp.mehedidb.com/utech/wp-content/uploads/elementor/thumbs/Technology__23-pepn1lkx1z8urolwviw08mbshux4t0dfa5p9kxxoxc.jpg',
      date: 'Feb 15',
      place: 'Camp, Pune',
      tag: 'upcoming',
    },
    {
      name: 'Frameworks and Technologies',
      imageUrl: 'https://wp.mehedidb.com/utech/wp-content/uploads/elementor/thumbs/Technology__21-pepn1lkx1z8urolwviw08mbshux4t0dfa5p9kxxoxc.jpg',
      date: 'Mar 30',
      place: 'Hadapsar, Pune',
      tag: 'past',
    },
  ];


  


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
    <div className="home-container">
      <SimpleCarousel />
      <div className="Services" id="services">
        <ServiceCards />
      </div>
      <div className="Events" id="events">
        <EventCardBlock events={events} />
      </div>
      <div className="FounderSection" id="founder">
        <AboutUs />
        <FounderSection />
      </div>
      <div className="contact" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;