const EventsAPI = {
  getEventsByLocation: async (id) => {
    const res = await fetch(`http://localhost:3000/api/events/${id}`);
    if (!res.ok) throw new Error('Failed to fetch events');
    return res.json();
  }
};

export default EventsAPI;
