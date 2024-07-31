import { useEffect } from "react";
import { useParams } from "react-router-dom";
import eventData from "../eventsData.json";
import "./eventdetails.css";
import Footer from "../components/Footer";

const EventDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const { eventPathName } = useParams();
  const event = eventData.eventDetails.find(
    (e) => e.eventName === eventPathName
  );

  if (!event) {
    return <div>Error: Event not found</div>;
  }

  const {
    imageUrl,
    name,
    introTitle,
    introDesc,
    video,
    pastdescription,
    carouselImages = [], // Default to an empty array if undefined
  } = event;

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
          <img src={imageUrl} alt={name} className="event-background" />

          <div className="event-details">
            <div className="event-name">
              <h1>{name}</h1>
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
                <h1>{introTitle}</h1>
              </div>
              <div className="event-intro-desc">
                <p>{introDesc || "No description available"}</p>
              </div>
            </div>
            <div className="event-video-wrapper">
              <div className="event-video">
                {video ? (
                  <iframe
                    title="Event Video"
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    scrolling="no"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>No video available</p>
                )}
              </div>
            </div>

            <div className="event-desc-img">
              <div className="event-pastdesc">
                <p>{pastdescription || "No description available"}</p>
              </div>
              <div className="event-pastimg">
                <div className="carousel-wrapper">
                  <div className="carousel-container">
                    <div className="carousel">
                      {carouselImages.length > 0 ? (
                        carouselImages.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-image image-${index + 1}`}
                            style={{ backgroundImage: `url(${image})` }}
                          ></div>
                        ))
                      ) : (
                        <p>No images available</p>
                      )}
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