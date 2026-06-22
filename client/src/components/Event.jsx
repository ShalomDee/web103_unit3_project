import React from 'react'
import '../css/Event.css'

const formatTime = (timeStr) => {
    if (!timeStr) return ''
    const [hours, minutes] = timeStr.split(':')
    const h = parseInt(hours)
    const ampm = h >= 12 ? 'PM' : 'AM'
    const displayH = h % 12 || 12
    return `${displayH}:${minutes} ${ampm}`
}

const formatDate = (dateStr) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
    })
}

const Event = ({ id, title, date, time, image }) => {
    return (
        <article className='event-information' id={`event-${id}`}>
            <img src={image} alt={title} />
            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {formatDate(date)} <br /> {formatTime(time)}</p>
                </div>
            </div>
        </article>
    )
}

export default Event
