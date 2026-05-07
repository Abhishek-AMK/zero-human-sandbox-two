import React from 'react';

const DriverProfiles = ({ drivers = [] }) => {
  return (
    <section className="driver-profiles">
      <h2>Driver Profiles</h2>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>
            <img src={driver.photo} alt={driver.name} />
            <h3>{driver.name}</h3>
            <p>{driver.contact}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DriverProfiles;