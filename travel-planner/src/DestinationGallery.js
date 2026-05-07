import React from 'react';

const DestinationGallery = ({ destinations }) => {
  return (
    <section className="destination-gallery">
      <h2>Destinations</h2>
      <ul>
        {destinations.map(dest => (
          <li key={dest.id}>
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DestinationGallery;