import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        (async () => {
            try {
                const [eventsData, locationsData] = await Promise.all([
                    EventsAPI.getAllEvents(),
                    LocationsAPI.getAllLocations()
                ])
                setEvents(eventsData)
                setLocations(locationsData)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    const filteredEvents = filter === 'all'
        ? events
        : events.filter(e => e.location_id === parseInt(filter))

    return (
        <div style={{ padding: '20px' }}>
            <h2>All Events</h2>

            <div style={{ marginBottom: '20px' }}>
                <label>Filter by location: </label>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value='all'>All Locations</option>
                    {locations.map(loc => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                </select>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredEvents.length > 0
                    ? filteredEvents.map(event => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ))
                    : <h3>No events found.</h3>
                }
            </div>
        </div>
    )
}

export default Events
