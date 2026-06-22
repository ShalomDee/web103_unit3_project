import { pool } from './database.js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const createTables = async () => {
  const client = await pool.connect()
  try {
    await client.query(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT,
        city TEXT,
        state TEXT,
        zip TEXT,
        image TEXT
      );

      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        image TEXT,
        location_id INTEGER REFERENCES locations(id)
      );

      INSERT INTO locations (name, address, city, state, zip, image) VALUES
        ('Echo Lounge', '1214 S Lamar St', 'Dallas', 'TX', '75215', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400'),
        ('House of Blues', '2200 N Lamar St', 'Dallas', 'TX', '75202', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400'),
        ('The Pavilion', '1818 Cadiz St', 'Dallas', 'TX', '75201', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'),
        ('American Airlines Center', '2500 Victory Ave', 'Dallas', 'TX', '75219', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400');

      INSERT INTO events (title, date, time, image, location_id) VALUES
        ('Anime Underground Night', '2026-07-04', '20:00:00', 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400', 1),
        ('Cosplay Showcase', '2026-07-11', '18:00:00', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400', 1),
        ('J-Pop Dance Battle', '2026-07-18', '21:00:00', 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400', 1),
        ('Otaku Open Mic', '2026-06-28', '19:00:00', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', 2),
        ('Mecha Build Contest', '2026-07-05', '14:00:00', 'https://images.unsplash.com/photo-1546027658-7aa750153465?w=400', 2),
        ('Manga Art Exhibition', '2026-07-12', '11:00:00', 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400', 2),
        ('Attack on Trivia Night', '2026-07-19', '15:00:00', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400', 2),
        ('Naruto Run 5K', '2026-07-25', '07:00:00', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400', 3),
        ('Isekai Panel Discussion', '2026-08-01', '16:00:00', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', 3),
        ('Sailor Moon Prom', '2026-06-14', '19:00:00', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400', 3),
        ('Dragon Ball Tournament', '2026-07-26', '13:00:00', 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400', 4),
        ('One Piece Grand Expo', '2026-08-08', '10:00:00', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400', 4),
        ('Demon Slayer Screening', '2026-08-15', '20:00:00', 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400', 4),
        ('Vintage Anime Marathon', '2026-06-10', '12:00:00', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400', 4);
    `)
    console.log('Tables created and seeded successfully!')
  } catch (err) {
    console.error('Error creating tables:', err)
  } finally {
    client.release()
    pool.end()
  }
}

createTables()
