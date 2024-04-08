import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaLightbulb,
  FaUserFriends,
  FaChalkboardTeacher,
} from "react-icons/fa"; // Import icons from react-icons
import "./Event.css";
// import MSME from '../images/MSMEEvent.png'
import eventData from "../eventsData.json";

import Footer from "../components/Footer";

const Event = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // const { index } = useParams();
  // const event = eventDetails[index];

  const { eventPathName } = useParams();
  const event = eventData.eventDetails.find(
    (e) => e.eventName === eventPathName
  );
  const imageUrl = event.imageUrl;
  // console.log(imageUrl)

  if (!event) {
    return <div>Error: Event not found</div>;
  }

  const handleRegistration = (type) => {
    const registrationLink =
      type === "attendee"
        ? event.registrationLinkAttendee
        : event.registrationLinkSpeaker;
    window.open(registrationLink, "_blank");
  };

  return (
    <>
      <div className="event-detail-block">
        <div className="event-img-detail">
          <img src={imageUrl} alt={event.name} className="event-background" />

          <div className="event-details">
            <div className="event-name">
              <h1>{event.name}</h1>
            </div>
            <div className="event-date-venue">
              <h2>
                {event.venue} | {event.date} | {event.time}
              </h2>
            </div>
            <div className="registration-options">
              <button onClick={() => handleRegistration("attendee")}>
                Register as Attendee
              </button>
              <button onClick={() => handleRegistration("speaker")}>
                Register as Speaker
              </button>
            </div>
          </div>
        </div>
        <div className="event-description-container">
          <div className="event-description">
            <div className="event-intro">
              <div className="event-intro-title">
                <h1>{event.introTitle}</h1>
              </div>
              <div className="event-intro-desc">
                <p>{event.introDesc}</p>
              </div>
            </div>
            <div className="event-who-why">
              <div className="event-why">
                <h1>Why Attend?</h1>
                <ul>
                  <li>
                    <FaLightbulb style={{ fontSize: "30px" }} />{" "}
                    {event.whyAttend[0]}
                  </li>
                  <li>
                    <FaUserFriends style={{ fontSize: "30px" }} />{" "}
                    {event.whyAttend[1]}
                  </li>
                  <li>
                    <FaChalkboardTeacher style={{ fontSize: "30px" }} />{" "}
                    {event.whyAttend[2]}
                  </li>
                </ul>
              </div>

              <div className="event-who">
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
        <Footer />
      </div>
    </>
  );
};

export default Event;
