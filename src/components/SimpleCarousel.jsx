import React, { useState, useEffect } from "react";
import "./SimpleCarousel.css"; // Create a CSS file for styling

const SimpleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://static.vecteezy.com/system/resources/previews/001/127/277/original/business-people-competition-with-time-vector.jpg",
      why: "Why US ?",
      header: 'Market Competition',
      info: 'Fierce competition in the market poses a challenge for businesses to differentiate and capture market share.',
    },
    {
      url: "https://www.hrdconnect.com/wp-content/uploads/2020/09/shutterstock_111003869-scaled.jpg",
      why: "Why US ?",
      header: 'Talent Auquisation',
      info: 'Attracting and retaining skilled talent is a constant challenge,impacting organizational productivity and success.',
    },
    {
      url: "https://i.pinimg.com/originals/ca/c5/90/cac5909fa1628c7a87752b9d17454870.jpg",
      why: "Why US ?",
      header: 'Regulatory Compliance',
      info: 'Navigating complex regulatory landscapes poses challenges,requiring businesses to stay compliant and avoid risks.',
    },
    {
      url: "https://goodish.agency/wp-content/uploads/2021/01/BRAND-2.jpg",
      why: "Why US ?",
      header: 'Brand Positioning',
      info: 'Positioning your brand amidst market turbulence requires strategic foresight, agility, and a commitment to delivering value.',
    },
    {
      url: "https://www.who.int/images/default-source/departments/health-financing/health-financing-and-uhc-(8).tmb-1200v.jpg?sfvrsn=add44264_6",
      why: "Why US ?",
      header: 'Financial Constraints',
      info: 'Limited financial resources can hinder growth and innovation, requiring strategic financial management.',
    },
    {
      url: "https://peoplementalityinc.com/wp-content/uploads/2018/02/digital-disruption-1.jpg",
      why: "Why US ?",
      header: 'Technological Disruption',
      info: 'Rapid technological advancements require businesses to adapt quickly, often leading to operational challenges.',
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="simple-carousel">
      <button onClick={prevSlide}>&lt;</button>

      
      

        <img
          src={slides[currentSlide].url}
          alt={slides[currentSlide].header}
        />
        <div className="content">
        <h3 className="slide-why">{slides[currentSlide].why}</h3>
        <h2 className="header">{slides[currentSlide].header}</h2>
        <p className="info">{slides[currentSlide].info}</p>

        </div>

      <button onClick={nextSlide}>&gt;</button>
    </div>

  );
};

export default SimpleCarousel;
