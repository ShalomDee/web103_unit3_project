import express from 'express'
import { getAllEvents, getEventsByLocation } from '../controllers/events.js'

const router = express.Router()

router.get('/events', getAllEvents)
router.get('/events/location/:locationId', getEventsByLocation)

export default router
