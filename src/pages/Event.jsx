import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaLightbulb, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa'; // Import icons from react-icons
import './Event.css';
import MSME from '../images/MSMEEvent.png'
import Footer from '../components/Footer';

const Event = () => {
  const eventDetails = [
    {
      name: 'ELEVATE MSME SECTOR WITH AI-POWERED INNOVATION',
      imageUrl: MSME,
      date: '16th Dec',
      venue: 'Mumbai Press Club, Glass House, Mahapalika Marg, Azad Maidan, Fort, Mumbai, Maharashtra 400 001',
      time: '2:30 pm - 5:30 pm',
      introTitle: 'WELCOME TO THE FUTURE OF BUSINESS: ELEVATE MSME SECTOR WITH AI-POWERED INNOVATION!',
      introDesc: "Join us on this transformative journey and be part of the AI-powered revolution that is reshaping the MSME sector. Elevate your business, empower your team, and embrace the future!For sponsorship opportunities, inquiries, or further information, contact us at contact link in the menu above.Don't miss out on the chance to be at the forefront of innovation. See you there! #ElevateMSME #AIPoweredInnovation",
      whyAttend: ['Explore Limitless Potential : Gain insights into the vast opportunities AI presents for MSMEs.', 'Networking Opportunities : Connect with like-minded professionals, industry experts, and thought leaders.', 'Expert Speakers : Learn from industry experts, successful entrepreneurs, and AI pioneers.'],
      whoShouldAttend: ['Entrepreneurs and Business Owners', 'Technology Enthusiasts', 'MSME Executives and Decision-Makers','AI Developers and Innovators','Government Representatives and Policymakers'],
      registrationLinkAttendee: 'https://docs.google.com/forms/d/e/1FAIpQLScrFUA2S6HrvBjNdMCm69y9GjAZV-KouPikwJUVNK84BYveYw/viewform',
      registrationLinkSpeaker: 'https://docs.google.com/forms/d/e/1FAIpQLSdQa2o6qgyiVPgqMEBgDF4LVC6tkbz3AMx_63dow3Lyju5YHA/viewform',
    },
    {
      name: 'Understanding of Web Development',
      imageUrl: 'https://example.com/event1-image.jpg',
      date: 'Jan 1',
      venue: 'Tech Hall',
      time: 'Pune',
      introTitle: 'WELCOME TO THE WORLD OF DATA, APPS AND AI COLLABORATION',
      introDesc: 'Snowflake is coming home to San Francisco. Join us at Snowflake Summit 2024 to explore all the cutting-edge innovation the Data Cloud has to offer. Discover the latest in AI, genAI, Apache Iceberg, streaming, privacy-preserving collaboration, flexible programmability, application development and much more.',
      whyAttend: ['Gain insights into the vast opportunities AI presents for MSMEs.', 'Connect with like-minded professionals, industry experts, and thought leaders.', 'Learn from industry experts, successful entrepreneurs, and AI pioneers.'],
      whoShouldAttend: ['Developers', 'Blockchain enthusiasts', 'Tech enthusiasts'],
      registrationLinkAttendee: 'https://example.com/register-attendee',
      registrationLinkSpeaker: 'https://example.com/register-speaker',
    },
  ];

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  const { index } = useParams();
  const event = eventDetails[index];

  const handleRegistration = (type) => {
    const registrationLink = type === 'attendee' ? event.registrationLinkAttendee : event.registrationLinkSpeaker;
    window.open(registrationLink, '_blank');
  };

  return (
    <>
    <div className='event-detail-block'>
      <div className='event-img-detail'>
        <img src={event.imageUrl} alt={event.name} className="event-background" />

        <div className="event-details">
          <div className='event-name'>
            <h1>{event.name}</h1>
          </div>
          <div className='event-date-venue'>
              <h2>{event.venue}   | {event.date}   |   {event.time}</h2>
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
    <div className="footer" id="footer">
        <Footer/>
      </div>
    </>
  );
};

export default Event;
