import React from 'react';
import { useParams } from 'react-router-dom';
import './Event.css';

const Event = () => {
  const eventDetails = [
    {
      name: 'Learning in Web3 and Blockchain',
      imageUrl: 'https://example.com/event1-image.jpg',
      date: 'Jan 1, 2023',
      place: 'Viman Nagar, Pune',
      venue: 'Tech Hall',
      whyAttend: 'Explore the latest trends in Web3 and Blockchain. Network with industry experts and enthusiasts.',
      whoShouldAttend: ['Developers', 'Blockchain enthusiasts', 'Tech enthusiasts'],
      registrationLinkAttendee: 'https://example.com/register-attendee',
      registrationLinkSpeaker: 'https://example.com/register-speaker',
    },

    {
      name: 'understanding of web development',
      imageUrl: 'https://example.com/event1-image.jpg',
      date: 'Jan 1, 2023',
      place: 'Viman Nagar, Pune',
      venue: 'Tech Hall',
      whyAttend: 'Explore the latest trends in Web3 and Blockchain. Network with industry experts and enthusiasts.',
      whoShouldAttend: ['Developers', 'Blockchain enthusiasts', 'Tech enthusiasts'],
      registrationLinkAttendee: 'https://example.com/register-attendee',
      registrationLinkSpeaker: 'https://example.com/register-speaker',
    },
    // Add more events as needed
  ];

  const { index } = useParams();
  const event = eventDetails[index];

  const handleRegistration = (type) => {
    const registrationLink = type === 'attendee' ? event.registrationLinkAttendee : event.registrationLinkSpeaker;
    window.open(registrationLink, '_blank');
  };

  return (
    <div>
      <div className="event-details">
        <img src={event.imageUrl} alt={event.name} />
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Place: {event.place}</p>
        <p>Venue: {event.venue}</p>

        <div className="event-description">
          <h3>Why Attend?</h3>
          <p>{event.whyAttend}</p>

          <h3>Who Should Attend?</h3>
          <ul>
            {event.whoShouldAttend.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="registration-options">
        <button onClick={() => handleRegistration('attendee')}>Register as Attendee</button>
        <button onClick={() => handleRegistration('speaker')}>Register as Speaker</button>
      </div>
    </div>
  );
};

export default Event;
