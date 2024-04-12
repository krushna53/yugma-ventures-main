import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaLightbulb,
  FaUserFriends,
  FaChalkboardTeacher,
} from "react-icons/fa"; // Import icons from react-icons
// import "./Event.css";
// import MSME from '../images/MSMEEvent.png'
import eventData from "../eventsData.json";
import "./eventdetails.css";

import Footer from "../components/Footer";

const EventDetail = () => {
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
            {/* <div className="event-date-venue">
              <h2>
                {event.venue} | {event.date} | {event.time}
              </h2>
            </div> */}
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
            <div className="event-video-wrapper">
              <div className="event-video">
                <iframe
                  title="Event Video"
                  src={event.video}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="event-desc-img">
              <div className="event-pastdesc">
                <p>{event.pastdescription}</p>
              </div>
              <div className="event-pastimg">
                <div className="carousel-wrapper">
                  <div className="carousel-container">
                    <div className="carousel">
                      {event.carouselImages.map((image, index) => (
                        <div key={index} className={`carousel-image image-${index + 1}`} style={{ backgroundImage: `url(${image})` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
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

export default EventDetail;
