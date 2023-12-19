import React from 'react'
import SimpleCarousel from '../components/SimpleCarousel'
import ServiceCards from '../components/ServiceCards'
import Contact from '../components/Contact'

import EventCardBlock from '../components/EventCardBlock';
import MSME from '../images/MSMEEvent_jp.jpg';
import MEJ from '../images/Mumbai_Ent_Jp.jpg';
import KEJ from '../images/Kolkata_ent_jp.jpg';
// import FounderCard from '../components/FounderCard';
import FounderSection from '../components/FounderSection';

// import Navbar from '../components/Navbar'

import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Home = () => {

  const events = [
    {
      eventName: 'elevate-msme-sector',
      name: 'ELEVATE MSME SECTOR WITH AI-POWERED INNOVATION',
      imageUrl: MSME,
      date: 'Dec 16',
      place: 'Mumbai Press Club, Mumbai',
      tag: 'Upcoming',
    },
    {
      name: 'MUMBAI ENTREPRUNERS AWARD 2022',
      imageUrl: MEJ,
      date: 'April 12',
      place: 'Vile Parle, Mumbai',
      tag: 'Past',
    },
    {
      name: 'KOLKATA ENTREPRUNERS AWARD 2022',
      imageUrl: KEJ,
      date: 'June 17',
      place: 'Kolkata',
      tag: 'Past',
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
      <div className="footer" id="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;