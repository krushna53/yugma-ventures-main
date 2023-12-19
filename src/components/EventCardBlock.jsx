import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className='event-heading'>Upcoming Events</h1>
      </div>
      <nav className="event-navbar">
        <ul>
          <li className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All
          </li>
          <li
            className={filter === 'Upcoming' ? 'active' : ''}
            onClick={() => setFilter('Upcoming')}
          >
            Upcoming
          </li>
          <li className={filter === 'Past' ? 'active' : ''} onClick={() => setFilter('Past')}>
            Past
          </li>
        </ul>
      </nav>

      <div className="event-card-block">
        {filteredEvents.map((event) => (
          <Link key={event.eventName} to={event.tag === 'Past' ? '#' : `/event/${event.eventName}`} className={`event-card ${event.tag}`}>
            <div className="event-card-img">
              <div className="event-card-tags">{event.tag}</div>
              <img src={event.imageUrl} alt={event.name} />
            </div>
            <div className="event-card-details">
              <h3>{event.name}</h3>
              <p className="date-place">{`${event.date}  |  ${event.place}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventCardBlock;
