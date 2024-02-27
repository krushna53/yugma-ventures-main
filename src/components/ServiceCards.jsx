import * as React from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import './ServiceCards.css';
import { FaHireAHelper } from "react-icons/fa";
import { BsPersonRaisedHand } from "react-icons/bs";
import { BsBarChartLineFill, BsCashStack, BsDiagram3Fill } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const servicesData = [
  {
    id: 0,
    icon: require('../images/planning.webp'),
    title: 'STRATEGIC PLANNING',
    description: 'We provide strategic planning services to help businesses set and achieve their goals',
  },
  {
    id: 1,
    icon: require('../images/FC.webp'),
    title: 'FINANCIAL CONSULTING',
    description: 'Our financial consulting services help businesses manage their finances effectively.',
  },
  {
    id: 2,
    icon: require('../images/op.webp'),
    title: 'OPERATIONS MANAGEMENT',
    description: 'We optimize business operations to enhance efficiency and reduce costs.',
  },
  {
    id: 3,
    icon: require('../images/leader.webp'),
    title: 'LEADERSHIP DEVELOPMENT',
    description: 'We offer leadership development programs to nurture and empower your team.',
  },
  {
    id: 4,
    icon: require('../images/Technology.webp'),
    title: 'TECHNOLOGY CONSULTING',
    description: 'Empower your business with our strategic Technology Consulting services, delivering tailored solutions to drive innovation and maximize technological efficiency.',
  },
  {
    id: 5,
    icon: require('../images/cxo.webp'),
    title: 'CXO HIRING',
    description: 'Unlock executive potential and drive organizational excellence with our CXO Hiring services, dedicated to placing top-tier leadership that aligns seamlessly with your company\'s vision and goals.',
  },
];

export default function ActionAreaCard() {
  const [currentService, setCurrentService] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const nextService = () => {
    if (windowSize.innerWidth <= 376) {
      setCurrentService((prevService) => (prevService + 1) % servicesData.length);
    }

    else if ((windowSize.innerWidth <= 769)){
      setCurrentService((prevService) => (prevService + 2) % servicesData.length);
    }

    else {
      setCurrentService((prevService) => (prevService + 3) % servicesData.length);
    }
  };

  const prevService = () => {
    if (windowSize.innerWidth <= 376) {
      setCurrentService(
        (prevService) => (prevService - 1 + servicesData.length) % servicesData.length
      );
    }

    else if ((windowSize.innerWidth <= 769)){
      setCurrentService(
        (prevService) => (prevService - 2 + servicesData.length) % servicesData.length
      );
    }

    else {
      setCurrentService(
        (prevService) => (prevService - 3 + servicesData.length) % servicesData.length
      );
    }
    
  };

  const generateAnimationNames = () => `fadeInUpSD-${currentService}`;
  // console.log(generateAnimationNames());

  // const checkActive = (service) => {
  //   if (service.id === currentService) {
  //     return 1;
  //   }
  // };
  // checkActive(servicesData[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextService();
  //   }, 2000); // Auto-slide every 3 seconds (adjust as needed)

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1  
        }
    },
    {
      breakpoint: 1400,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1  
      }
  },
    {
      breakpoint: 1300,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1  
      }
  },
    {
      breakpoint: 1200,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1  
      }
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1 
      }
  }
  ]
     }
  

  return (
    <div className='service-container'>
      <h1 id='title'>Our Services</h1>
      <div className='Services'>
        <Slider {...settings}>
          {servicesData.map((service) => (
            <div key={service.id} className={`${generateAnimationNames()} ${'Card-root'}`}>
              <Card sx={{ maxWidth: 345 }} raised={true}>
                <div className='image'>
                  <img src={service.icon} alt={service.title} />
                </div>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </Card>
            </div>
          ))}
        </Slider>
        <div className="service-buttons">
        <button onClick={prevService}><IoArrowBackCircleOutline /></button>
        <button onClick={nextService}><IoArrowForwardCircleOutline /></button>
      </div>
      </div>
      
    </div>
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}