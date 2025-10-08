import { pool } from './database.js';

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        location_id INTEGER REFERENCES locations(id),
        title VARCHAR(255),
        date TIMESTAMP
      );
    `);

    // Insert sample locations
    await pool.query(`
      INSERT INTO locations (name)
      VALUES ('Music Hall'), ('Dungeon Base'), ('Support Group'), ('Geocache Park')
      ON CONFLICT DO NOTHING;
    `);

    // Insert sample events
    await pool.query(`
      INSERT INTO events (location_id, title, date)
      VALUES
      (1, 'Rock Concert', NOW() + INTERVAL '2 days'),
      (2, 'Dungeon Crawl', NOW() + INTERVAL '5 days'),
      (3, 'Community Meetup', NOW() - INTERVAL '1 day'),
      (4, 'Geocache Hunt', NOW() + INTERVAL '3 days');
    `);

    console.log('Tables created and sample data inserted.');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createTables();
