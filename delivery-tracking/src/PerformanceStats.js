import React from 'react';

const PerformanceStats = ({ stats = {} }) => {
  const { efficiency = '--%', avgTime = '--', successRate = '--%' } = stats;

  return (
    <section className="performance-stats">
      <h2>Performance Statistics</h2>
      <p>Efficiency: {efficiency}</p>
      <p>Average Time: {avgTime}</p>
      <p>Success Rate: {successRate}</p>
    </section>
  );
};

export default PerformanceStats;