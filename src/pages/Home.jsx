import React from 'react'
import SimpleCarousel from '../components/SimpleCarousel'
import EventCardBlock from '../components/EventCardBlock';

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
  return (
    <div>
      <SimpleCarousel/>
      <div>
        <h1>Upcoming Events</h1>
        <EventCardBlock events={events} />
      </div>
    </div>
  )
}

export default Home
