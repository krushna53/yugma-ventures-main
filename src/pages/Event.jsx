import React from 'react';
import { useParams } from 'react-router-dom';
import './Event.css';

const Event = () => {
  const eventDetails = [
    {
      name: 'Learning in Web3 and Blockchain',
      imageUrl: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=960,height=480/event-covers/pd/5e114149-9cd8-4b4a-9a37-940916de7e5e',
      date: 'Jan 1',
      // place: 'Viman Nagar, Pune',
      venue: 'Tech Hall',
      whyAttend: ['Explore Limitless Potential:Gain insights into the vast opportunities AI presents for MSMEs.','Networking Opportunities: Connect with like-minded professionals, industry experts, and thought leaders.','Expert Speakers: Learn from industry experts, successful entrepreneurs, and AI pioneers.'],
      whoShouldAttend: ['Developers', 'Blockchain enthusiasts', 'Tech enthusiasts'],
      registrationLinkAttendee: 'https://example.com/register-attendee',
      registrationLinkSpeaker: 'https://example.com/register-speaker',
    },

    {
      name: 'understanding of web development',
      imageUrl: 'https://example.com/event1-image.jpg',
      date: 'Jan 1',
      // place: 'Viman Nagar, Pune',
      venue: 'Tech Hall',
      whyAttend: ['Explore Limitless Potential:Gain insights into the vast opportunities AI presents for MSMEs.','Networking Opportunities: Connect with like-minded professionals, industry experts, and thought leaders.','Expert Speakers: Learn from industry experts, successful entrepreneurs, and AI pioneers.'],
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
      <div className='event-detail-block'>
        <div className="event-details">
          <img src={event.imageUrl} alt={event.name} />
          <div className='event-short-detail'>
            <div className='event-name'>
              <h2>{event.name}</h2>
            </div>
            <div className='event-date-venue'>
              <div className='event-date'>
                <div>Date: {event.date}</div>
              </div>
              {/* <div className='event-place'>
              <p>Place: {event.place}</p>
              </div> */}
              <div className='event-venue'>
                <div>Venue: {event.venue}</div>
              </div>
            </div>
          </div>

          <div className="event-description">
            <div className='event-who-why'>
              <div className='event-why'>
                <h3>Why Attend?</h3>
                <ul>
                  {event.whyAttend.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className='event-who'>
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
        </div>


      </div>
    </div>
  );
};

export default Event;
