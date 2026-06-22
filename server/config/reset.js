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
        ('The Akihabara Arcade', '101 Electric Ave', 'Dallas', 'TX', '75201', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400'),
        ('Sakura Convention Hall', '204 Blossom Blvd', 'Dallas', 'TX', '75202', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'),
        ('Shinjuku Night Market', '88 Neon St', 'Dallas', 'TX', '75203', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400'),
        ('Konoha Training Grounds', '9 Leaf Village Rd', 'Dallas', 'TX', '75204', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400');

      INSERT INTO events (title, date, time, image, location_id) VALUES
        ('Anime Underground Night', '2026-07-04', '20:00:00', 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400', 1),
        ('Cosplay Showcase', '2026-07-11', '18:00:00', 'https://images.unsplash.com/photo-1717185891319-6bf096fba62f?w=400', 1),
        ('Mecha Build Contest', '2026-07-05', '14:00:00', 'https://images.unsplash.com/photo-1626450429795-a3ba2964ef7f?w=400', 1),
        ('Manga Art Exhibition', '2026-07-12', '11:00:00', 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400', 2),
        ('Isekai Panel Discussion', '2026-08-01', '16:00:00', 'https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?w=400', 2),
        ('One Piece Grand Expo', '2026-08-08', '10:00:00', 'https://images.unsplash.com/photo-1621478374422-35206faeddfb?w=400', 2),
        ('Demon Slayer Screening', '2026-08-15', '20:00:00', 'https://images.unsplash.com/photo-1643553517154-24eb7fd86437?w=400', 2),
        ('Vintage Anime Marathon', '2026-06-10', '12:00:00', 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400', 2),
        ('J-Pop Dance Battle', '2026-07-18', '21:00:00', 'https://images.unsplash.com/photo-1711659818399-45fe00d0c731?w=400', 3),
        ('Otaku Open Mic', '2026-06-28', '19:00:00', 'https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?w=400', 3),
        ('Sailor Moon Prom', '2026-06-14', '19:00:00', 'https://images.unsplash.com/photo-1697205153149-a60e3a2ddc61?w=400', 3),
        ('Naruto Run 5K', '2026-07-25', '07:00:00', 'https://images.unsplash.com/photo-1743168624828-5de6eb24a2ce?w=400', 4),
        ('Dragon Ball Tournament', '2026-07-26', '13:00:00', 'https://images.unsplash.com/photo-1747207323774-e01e18cb7a76?w=400', 4),
        ('Attack on Trivia Night', '2026-07-19', '15:00:00', 'https://images.unsplash.com/photo-1570937943292-a574bd5bc722?w=400', 4);
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
