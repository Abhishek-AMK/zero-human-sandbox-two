import React from 'react';

const ShipmentCard = ({ shipment }) => {
  return (
    <div className="shipment-card">
      <h3>ID: {shipment.id}</h3>
      <p>Origin: {shipment.origin}</p>
      <p>Destination: {shipment.destination}</p>
      <p>ETA: {shipment.eta}</p>
      <button>Update Status</button>
      <button>View Details</button>
    </div>
  );
};

export default ShipmentCard;