import React from 'react';

const ListingCard = ({ property }) => {
  return (
    <div className="listing-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>${property.price}</p>
      <button>View Details</button>
      <button>Inquire</button>
    </div>
  );
};

export default ListingCard;