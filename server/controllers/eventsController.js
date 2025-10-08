// import { pool } from '../config/database.js';

// export const getEventsByLocation = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [id]);
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// import { pool } from '../config/database.js'; // Comment this out for now
// Using mock data instead of database
export const getEventsByLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const mockEvents = [
      { id: 1, location_id: '1', title: 'Concert Night', date: '2025-10-10', time: '20:00', image: '' },
      { id: 2, location_id: '2', title: 'Art Exhibition', date: '2025-10-12', time: '18:00', image: '' },
      { id: 3, location_id: '1', title: 'Jazz Festival', date: '2025-10-15', time: '19:30', image: '' },
      { id: 4, location_id: '3', title: 'Food Tasting', date: '2025-10-20', time: '17:00', image: '' },
    ];

    const eventsForLocation = mockEvents.filter(event => event.location_id === id);
    res.json(eventsForLocation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
