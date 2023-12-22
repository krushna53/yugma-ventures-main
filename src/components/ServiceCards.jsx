import * as React from 'react';
import Card from '@mui/material/Card';
import './ServiceCards.css';
import { FaHireAHelper } from "react-icons/fa";
import { BsPersonRaisedHand } from "react-icons/bs";
import { BsBarChartLineFill, BsCashStack, BsDiagram3Fill } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";

const servicesData = [
  {
    id: 1,
    icon: require('../images/planning.png'),
    title: 'STRATEGIC PLANNING',
    description: 'We provide strategic planning services to help businesses set and achieve their goals',
  },
  {
    id: 2,
    icon: require('../images/FC.png'),
    title: 'FINANCIAL CONSULTING',
    description: 'Our financial consulting services help businesses manage their finances effectively.',
  },
  {
    id: 3,
    icon: require('../images/op.png'),
    title: 'OPERATIONS MANAGEMENT',
    description: 'We optimize business operations to enhance efficiency and reduce costs.',
  },
  {
    id: 4,
    icon: require('../images/leader.png'),
    title: 'LEADERSHIP DEVELOPMENT',
    description: 'We offer leadership development programs to nurture and empower your team.',
  },
  {
    id: 5,
    icon: require('../images/Technology.png'),
    title: 'TECHNOLOGY CONSULTING',
    description: 'Empower your business with our strategic Technology Consulting services, delivering tailored solutions to drive innovation and maximize technological efficiency.',
  },
  {
    id: 6,
    icon: require('../images/cxo.png'),
    title: 'CXO HIRING',
    description: 'Unlock executive potential and drive organizational excellence with our CXO Hiring services, dedicated to placing top-tier leadership that aligns seamlessly with your company\'s vision and goals.',
  },
];

export default function ActionAreaCard() {
  return (
    <div className='service-container'>
      <h1 id='title'>Our Services</h1>
      <div className='Services'>
        {servicesData.map((service) => (
          <Card key={service.id} className='Card-root' sx={{ maxWidth: 345 }}>
           <div className='image'>
              <img src={service.icon} alt={service.title}   />
            </div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
