import React from 'react';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <h3>{trip.destination}</h3>
      <p>Dates: {trip.startDate} - {trip.endDate}</p>
      <p>Status: {trip.status}</p>
      <button>Edit</button>
      <button>View Details</button>
    </div>
  );
};

export default TripCard;