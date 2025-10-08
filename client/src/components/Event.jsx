import React from 'react'
import '../css/Event.css'

// Presentational Event component - receives event data via props from LocationEvents
const Event = ({ id, title, date, time, image }) => {
  return (
    <article className='event-information' aria-labelledby={`event-${id}`}>
      {image ? <img src={image} alt={`${title} image`} /> : <div className='event-placeholder' />}

      <div className='event-information-overlay'>
        <div className='text'>
          <h3 id={`event-${id}`}>{title}</h3>
          <p><i className="fa-regular fa-calendar fa-bounce"></i> {date} <br /> {time}</p>
        </div>
      </div>
    </article>
  )
}

export default Event