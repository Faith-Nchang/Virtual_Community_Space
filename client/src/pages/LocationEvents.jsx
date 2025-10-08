import React from 'react'
import '../css/LocationEvents.css'

const LocationEvents = ({ location = {}, events = [] }) => {
    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {location.image && <img src={location.image} alt={location.name} />}
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <article className='event-card' key={event.id}>
                            {event.image && <img src={event.image} alt={event.title} />}
                            <div className='event-body'>
                                <h3>{event.title}</h3>
                                <p>{event.date} {event.time}</p>
                            </div>
                        </article>
                    ))
                ) : (
                    <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                )}
            </main>
        </div>
    )
}

export default LocationEvents