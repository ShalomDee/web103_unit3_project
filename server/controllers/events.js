import { pool } from '../config/database.js'

export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY date ASC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getEventsByLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    const result = await pool.query(
      'SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC',
      [locationId]
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
