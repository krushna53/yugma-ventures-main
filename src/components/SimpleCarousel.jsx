import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import brandImage from "../images/brandpositioning.webp";
import regulatryImage from "../images/regulation.webp";
import techImage from "../images/techdisp.webp";
import marketImage from "../images/market.webp";
import talentImage from "../images/talent.webp";
import financeImage from "../images/talent.webp";
import "./SimpleCarousel.css"; // Create a CSS file for styling

const SimpleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: marketImage,
      why: "Why Us ?",
      header: "Market Competition",
      info: "Fierce competition in the market poses a challenge for businesses to differentiate and capture market share.",
    },
    {
      url: talentImage,
      why: "Why Us ?",
      header: "Talent Auquisation",
      info: "Attracting and retaining skilled talent is a constant challenge,impacting organizational productivity and success.",
    },
    {
      url: regulatryImage,
      why: "Why Us ?",
      header: "Regulatory Compliance",
      info: "Navigating complex regulatory landscapes poses challenges,requiring businesses to stay compliant and avoid risks.",
    },
    {
      url: brandImage,
      why: "Why Us ?",
      header: "Brand Positioning",
      info: "Positioning your brand amidst market turbulence requires strategic foresight, agility, and a commitment to delivering value.",
    },
    {
      url: financeImage,
      why: "Why Us ?",
      header: "Financial Constraints",
      info: "Limited financial resources can hinder growth and innovation, requiring strategic financial management.",
    },
    {
      url: techImage,
      why: "Why Us ?",
      header: "Technological Disruption",
      info: "Rapid technological advancements require businesses to adapt quickly, often leading to operational challenges.",
    },
    // Add more slides as needed
  ];

  // const generateAnimationNames = (index) => `fadeInUpSD-${index}`;
  const generateAnimationNames = () => `fadeInUpSD-${currentSlide}`;

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
      <img src={slides[currentSlide].url} alt={slides[currentSlide].header} />
      <div className={`carousel-content fadeInUpSD ${generateAnimationNames(currentSlide)}`}>
        <div className="carousel-inner-content">
          <h3>{slides[currentSlide].why}</h3>
          <h2>{slides[currentSlide].header}</h2>
          <p>{slides[currentSlide].info}</p>
        </div>
      </div>

      <div className="buttons">
        <button onClick={prevSlide}><FaArrowCircleLeft /></button>
        <button onClick={nextSlide}><FaArrowCircleRight /></button>
      </div>
    </div>
  );
};

export default SimpleCarousel;
