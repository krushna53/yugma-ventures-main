import React, { useState, useEffect } from 'react';
import './SimpleCarousel.css'; // Create a CSS file for styling

const SimpleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: 'https://placekitten.com/800/400', label: 'Slide 1' },
    { url: 'https://placekitten.com/800/401', label: 'Slide 2' },
    { url: 'https://placekitten.com/800/402', label: 'Slide 3' },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="simple-carousel">
      <button onClick={prevSlide}>&lt;</button>
      <img src={slides[currentSlide].url} alt={slides[currentSlide].label} />
      <p className="slide-label">{slides[currentSlide].label}</p>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default SimpleCarousel;
