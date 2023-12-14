import * as React from 'react';
import Card from '@mui/material/Card';
import './ServiceCards.css';
import { FaHireAHelper } from "react-icons/fa";
import { BsPersonRaisedHand } from "react-icons/bs";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsCashStack } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { BsDiagram3Fill } from "react-icons/bs";

export default function ActionAreaCard() {
    return (
        <div className='service-container'>
            <h1 id = 'title'>
                Our Services
            </h1>
            <div className='Services'>
            <Card className='Card-root' sx={{ maxWidth: 345 }}>
                <div className='image'>
                <BsBarChartLineFill/>
                </div>
                
                <h1>STRATEGIC PLANNING</h1>
                <p>We provide strategic planning services to help businesses set and achieve their goals</p>
            </Card>
            <Card className='Card-root' sx={{ maxWidth: 345 }}>
            <div className='image'>
                    <BsCashStack/>
                </div>
            <h1>FINANCIAL CONSULTING</h1>
                <p>Our financial consulting services help businesses manage their finances effectively.</p>
            </Card>
            <Card className='Card-root' sx={{ maxWidth: 345 }}>
            <div className='image'>
                    <BsDiagram3Fill/>
                </div>
            <h1>OPERATIONS MANAGEMENT</h1>
                <p>We optimize business operations to enhance efficiency and reduce costs.</p>
            </Card>
            <Card className='Card-root' sx={{ maxWidth: 345 }}>
            <div className='image'>
                    <BsPersonRaisedHand/>
                </div>
            <h1>LEADERSHIP DEVELOPMENT</h1>
                <p>We offer leadership development programs to nurture and empower your team.</p>
            </Card>
            <Card className='Card-root' sx={{ maxWidth: 345 }}>
            <div className='image'>
                    <GrTechnology/>
                </div>
            <h1>TECHNOLOGY CONSULTING</h1>
                <p>Empower your business with our strategic Technology Consulting services, delivering tailored solutions to drive innovation and maximize technological efficiency.</p>
            </Card>
            <Card className='Card-root' sx={{ maxWidth: 345 }}>
            <div className='image'>
                    <FaHireAHelper/>
                </div>
            <h1>CXO HIRING</h1>
                <p>Unlock executive potential and drive organizational excellence with our CXO Hiring services, dedicated to placing top-tier leadership that aligns seamlessly with your company's vision and goals.</p>
            </Card>
            </div>
        </div>
    );
}
