import React from 'react';

const MortgageSection = () => {
  return (
    <div className="mortgage-section">
      <h2>Mortgage Calculator</h2>
      <form>
        <label>Loan Amount:
          <input type="number" placeholder="Enter amount" required />
        </label>
        <label>Interest Rate:
          <input type="number" placeholder="Enter rate" required />
        </label>
        <label>Loan Term (years):
          <input type="number" placeholder="Enter years" required />
        </label>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default MortgageSection;