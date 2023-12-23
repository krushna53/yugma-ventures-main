import React from 'react'
import SimpleCarousel from '../components/SimpleCarousel'
import ServiceCards from '../components/ServiceCards'
import Contact from '../components/Contact'

import EventCardBlock from '../components/EventCardBlock';
// import MSME from '../images/MSMEEvent_jp.jpg';
// import MEJ from '../images/Mumbai_Ent_Jp.jpg';
// import KEJ from '../images/Kolkata_ent_jp.jpg';
// import FounderCard from '../components/FounderCard';
import FounderSection from '../components/FounderSection';

// import Navbar from '../components/Navbar'
import eventData from '../eventsData.json';

import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';


const Home = () => {

//  const events = [
//     {
//       eventName: 'elevate-msme-sector-with-ai-powered-innovation',
//       name: 'ELEVATE MSME SECTOR WITH AI-POWERED INNOVATION',
//       imageUrl: MSME,
//       date: new Date('2024-1-1'), // Update the date format as per your requirement
//       place: 'Mumbai Press Club, Mumbai',
//     },
//     {
//       name: 'MUMBAI ENTREPRENEURS AWARD 2022',
//       imageUrl: MEJ,
//       date: new Date('2022-04-12'),
//       place: 'Vile Parle, Mumbai',
//     },
//     {
//       name: 'KOLKATA ENTREPRENEURS AWARD 2022',
//       imageUrl: KEJ,
//       date: new Date('2022-06-17'),
//       place: 'Kolkata',
//     },
//   ];


   // Function to categorize events as 'Upcoming' or 'Past'
   const categorizeEvents = (event) => {
    const currentDate = new Date();
    const eventDate = new Date(event.date);
    console.log(eventDate);
    // console.log(event.date);
    return eventDate >= currentDate ? 'Upcoming' : 'Past';
  };

  // Add the 'tag' property to each event based on categorization
  const categorizedEvents = eventData.events.map((event) => ({
    ...event,
    tag: categorizeEvents(event)
  }));
  console.log(categorizedEvents);


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
        <EventCardBlock events={categorizedEvents} />
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