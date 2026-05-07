import React from 'react';

const BudgetTracker = ({ expenses = [], budget }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <section className="budget-tracker">
      <h2>Budget Tracker</h2>
      <p>Total Budget: ${budget}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining: ${budget - totalExpenses}</p>
    </section>
  );
};

export default BudgetTracker;