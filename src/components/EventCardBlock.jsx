// EventCardBlock.js

import React, { useState } from 'react';
import './EventCardBlock.css';

const EventCardBlock = ({ events }) => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') {
      return true;
    } else {
      return event.tag === filter;
    }
  });

  return (
    <div>
      <div className='Event'>
      <h1>Upcoming Events</h1>
      </div>
      <nav className="event-navbar">
        <ul>
          <li className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All
          </li>
          <li className={filter === 'upcoming' ? 'active' : ''} onClick={() => setFilter('upcoming')}>
            Upcoming
          </li>
          <li className={filter === 'past' ? 'active' : ''} onClick={() => setFilter('past')}>
            Past
          </li>
        </ul>
      </nav>

      <div className="event-card-block">
        {filteredEvents.map((event, index) => (
          <div className={`event-card ${event.tag}`} key={index}>
            <div className="event-card-img">
              <img src={event.imageUrl} alt={event.name} />
            </div>
            <div className="event-details">
              <h3>{event.name}</h3>
              <p className="date-place">{`${event.date}  |  ${event.place}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCardBlock;
