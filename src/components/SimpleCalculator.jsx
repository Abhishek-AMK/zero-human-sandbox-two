import React, { useState } from 'react';

const SimpleCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '/', '.', '='].map((symbol) => (
          <button key={symbol} onClick={() => symbol === '=' ? calculateResult() : handleButtonClick(symbol)}>
            {symbol}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default SimpleCalculator;
