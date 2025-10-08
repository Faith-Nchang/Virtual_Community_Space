import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationsAPI from '../services/LocationsAPI';
import EventsAPI from '../services/EventsAPI';
import LocationEvents from './LocationEvents';

export default function LocationDetailPage() {
  const { id } = useParams(); // location ID from URL (string)
  // undefined = loading, null = not found, object = found
  const [location, setLocation] = useState(undefined);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let mounted = true;

    // Fetch location info first
    LocationsAPI.getAllLocations()
      .then((locations) => {
        if (!mounted) return;
        // compare as strings to avoid number/string mismatch
        const loc = locations.find((l) => String(l.id) === String(id));
        setLocation(loc || null);

        // only fetch events when we found the location
        if (loc) {
          EventsAPI.getEventsByLocation(id)
            .then((ev) => mounted && setEvents(ev))
            .catch(console.error);
        }
      })
      .catch(console.error);

    return () => { mounted = false };
  }, [id]);

  if (location === undefined) return <p>Loading location...</p>;
  if (location === null) return <p>Location not found</p>;

  return (
    <LocationEvents index={id} location={location} events={events} />
  );
}
