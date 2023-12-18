import React from 'react';
import { useParams } from 'react-router-dom';
import { FaLightbulb, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa'; // Import icons from react-icons
import './Event.css';

const Event = () => {
  const eventDetails = [
    {
      name: 'Learning in Web3 and Blockchain',
      imageUrl: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'Jan 1',
      venue: 'Tech Hall',
      place: 'Pune',
      introTitle: 'WELCOME TO THE WORLD OF DATA, APPS AND AI COLLABORATION',
      introDesc: 'Snowflake is coming home to San Francisco. Join us at Snowflake Summit 2024 to explore all the cutting-edge innovation the Data Cloud has to offer. Discover the latest in AI, genAI, Apache Iceberg, streaming, privacy-preserving collaboration, flexible programmability, application development and much more.',
      whyAttend: ['Gain insights into the vast opportunities AI presents for MSMEs.', 'Connect with like-minded professionals, industry experts, and thought leaders.', 'Learn from industry experts, successful entrepreneurs, and AI pioneers.'],
      whoShouldAttend: ['Developers', 'Blockchain enthusiasts', 'Tech enthusiasts'],
      registrationLinkAttendee: 'https://example.com/register-attendee',
      registrationLinkSpeaker: 'https://example.com/register-speaker',
    },
    {
      name: 'Understanding of Web Development',
      imageUrl: 'https://example.com/event1-image.jpg',
      date: 'Jan 1',
      venue: 'Tech Hall',
      place: 'Pune',
      introTitle: 'WELCOME TO THE WORLD OF DATA, APPS AND AI COLLABORATION',
      introDesc: 'Snowflake is coming home to San Francisco. Join us at Snowflake Summit 2024 to explore all the cutting-edge innovation the Data Cloud has to offer. Discover the latest in AI, genAI, Apache Iceberg, streaming, privacy-preserving collaboration, flexible programmability, application development and much more.',
      whyAttend: ['Gain insights into the vast opportunities AI presents for MSMEs.', 'Connect with like-minded professionals, industry experts, and thought leaders.', 'Learn from industry experts, successful entrepreneurs, and AI pioneers.'],
      whoShouldAttend: ['Developers', 'Blockchain enthusiasts', 'Tech enthusiasts'],
      registrationLinkAttendee: 'https://example.com/register-attendee',
      registrationLinkSpeaker: 'https://example.com/register-speaker',
    },
  ];

  const { index } = useParams();
  const event = eventDetails[index];

  const handleRegistration = (type) => {
    const registrationLink = type === 'attendee' ? event.registrationLinkAttendee : event.registrationLinkSpeaker;
    window.open(registrationLink, '_blank');
  };

  return (
    <div className='event-detail-block'>
      <div className='event-img-detail'>
        <img src={event.imageUrl} alt={event.name} className="event-background" />

        <div className="event-details">
          <div className='event-name'>
            <h1>{event.name}</h1>
          </div>
          <div className='event-date-venue'>
              <h2>{event.venue}   | {event.place}   |   {event.date}</h2>
          </div>
          <div className="registration-options">
            <button onClick={() => handleRegistration('attendee')}>Register as Attendee</button>
            <button onClick={() => handleRegistration('speaker')}>Register as Speaker</button>
          </div>
        </div>
      </div>
      <div className="event-description-container">
      <div className="event-description">
          <div className='event-intro'>
            <div className='event-intro-title'>
              <h1>{event.introTitle}</h1>
            </div>
            <div className='event-intro-desc'>
              <p>{event.introDesc}</p>
            </div>
          </div>
          <div className='event-who-why'>
            <div className='event-why'>
              <h1>Why Attend?</h1>
              <ul>
                <li><FaLightbulb /> {event.whyAttend[0]}</li>
                <li><FaUserFriends /> {event.whyAttend[1]}</li>
                <li><FaChalkboardTeacher /> {event.whyAttend[2]}</li>
              </ul>
            </div>

            <div className='event-who'>
              <h1>Who Should Attend?</h1>
              <ul>
                {event.whoShouldAttend.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Event;
