import React from 'react';

const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <img src={agent.photo} alt={agent.name} />
      <h3>{agent.name}</h3>
      <p>{agent.contact}</p>
      <button>Contact</button>
    </div>
  );
};

export default AgentCard;