import React, { useState } from 'react';

const StatusFilters = ({ onFilterChange }) => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleChange = (e) => {
    const status = e.target.value;
    setSelectedStatus(status);
    onFilterChange(status);
  };

  return (
    <div className="status-filters">
      <label>Filter by Status:</label>
      <select value={selectedStatus} onChange={handleChange}>
        <option value="all">All</option>
        <option value="in-transit">In Transit</option>
        <option value="delivered">Delivered</option>
        <option value="delayed">Delayed</option>
      </select>
    </div>
  );
};

export default StatusFilters;