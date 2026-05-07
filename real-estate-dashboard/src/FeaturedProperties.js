import React from 'react';
import ListingCard from './ListingCard';

const FeaturedProperties = ({ properties }) => {
  return (
    <div className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="property-list">
        {properties.map(property => (
          <ListingCard property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;