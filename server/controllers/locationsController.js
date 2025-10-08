// import { pool } from '../config/database.js';

// export const getAllLocations = async (req, res) => {
//   try {
//     const result = await pool.query('SELECT id, name FROM locations ORDER BY id ASC LIMIT 4');
//     res.json(result.rows); // [{id:1,name:'Music Hall'}, ...]
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// import { pool } from '../config/database.js'; // Comment this out for now

// Using mock data instead of database
export const getAllLocations = async (req, res) => {
  try {
    const mockLocations = [
      { id: '1', name: 'Echo Lounge' },
      { id: '2', name: 'House of Blues' },
      { id: '3', name: 'Pavilion' },
      { id: '4', name: 'American Airlines Arena' },
    ];

    res.json(mockLocations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
