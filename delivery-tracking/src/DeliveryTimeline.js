import React from 'react';

const DeliveryTimeline = ({ timeline }) => {
  return (
    <section className="delivery-timeline">
      <h2>Delivery Timeline</h2>
      <ul>
        {timeline.map((event, index) => (
          <li key={index}>
            <strong>{event.time}</strong>: {event.status}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeliveryTimeline;