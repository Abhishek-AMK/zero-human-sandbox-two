import React from 'react';

const SearchFilters = () => {
  return (
    <div className="search-filters">
      <label>Location:
        <input type="text" placeholder="Enter location" />
      </label>
      <label>Price Range:
        <input type="number" placeholder="Min" />
        <input type="number" placeholder="Max" />
      </label>
      <label>Property Type:
        <select>
          <option value="">Any</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
      </label>
      <button>Search</button>
    </div>
  );
};

export default SearchFilters;