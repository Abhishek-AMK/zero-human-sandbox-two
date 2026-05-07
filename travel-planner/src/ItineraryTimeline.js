import React from 'react';

const ItineraryTimeline = ({ itinerary }) => {
  return (
    <section className="itinerary-timeline">
      <h2>Itinerary Timeline</h2>
      <ul>
        {itinerary.map((event, index) => (
          <li key={index}>
            <strong>{event.time}</strong>: {event.activity}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItineraryTimeline;