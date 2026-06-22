import { pool } from '../config/database.js'

export const getAllLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations ORDER BY id ASC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
