const getAllEvents = async () => {
  const response = await fetch('/api/events')
  return response.json()
}

const getEventsByLocation = async (locationId) => {
  const response = await fetch(`/api/events/location/${locationId}`)
  return response.json()
}

const EventsAPI = { getAllEvents, getEventsByLocation }
export default EventsAPI
