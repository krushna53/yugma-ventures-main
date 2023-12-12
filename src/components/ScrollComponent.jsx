import React, { useEffect, useState } from 'react';

const ScrollComponent = () => {
  const [isAffixed, setAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAffixed(true);
        console.log('OK');
      } else {
        setAffixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div className={isAffixed ? 'nav affix' : 'nav'}>
      {/* Your other component content goes here */}
    </div>
  );
};

export default ScrollComponent;
