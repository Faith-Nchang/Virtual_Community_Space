import React, { useEffect, useState } from 'react';
import EventsAPI from '../services/EventsAPI';

const Events = ({ locationId }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (locationId) {
      EventsAPI.getEventsByLocation(locationId)
        .then(setEvents)
        .catch(console.error);
    }
  }, [locationId]);

  if (!locationId) return <p>Select a location to view events.</p>;

  return (
    <div>
      <h2>Events at Location {locationId}</h2>
      {events.length === 0 && <p>No events found.</p>}
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.title}</p>
          <p>{new Date(event.date).toLocaleString()}</p>
          {new Date(event.date) < new Date() && <span>Past Event</span>}
        </div>
      ))}
    </div>
  );
};

export default Events;
