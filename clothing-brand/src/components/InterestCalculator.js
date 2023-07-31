import React, { useState } from 'react';

const InterestCalculator = () => {
  const [shoppingTotal, setShoppingTotal] = useState('');
  const [months, setMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'shoppingTotal') {
      setShoppingTotal(value);
    } else if (name === 'months') {
      setMonths(value);
    }
  };

  const calculateInterest = () => {
    const interestRate = 0.2; // 20% interest rate
    const total = parseFloat(shoppingTotal);
    const numMonths = parseInt(months);

    if (isNaN(total) || isNaN(numMonths) || total <= 0 || numMonths <= 0) {
      alert('Please enter valid values for shopping total and number of months.');
      return;
    }

    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = (total + total * interestRate) / numMonths;
    const totalAmount = total + total * interestRate;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalAmount(totalAmount.toFixed(2));
  };

  return (
    <div>
      <h2>Interest Calculator</h2>
      <form>
        <label htmlFor="shoppingTotal">Shopping Total:</label>
        <input
          type="number"
          id="shoppingTotal"
          name="shoppingTotal"
          value={shoppingTotal}
          onChange={handleInputChange}
        />

        <label htmlFor="months">Number of Months:</label>
        <input
          type="number"
          id="months"
          name="months"
          value={months}
          onChange={handleInputChange}
        />

        <button type="button" onClick={calculateInterest}>
          Calculate
        </button>

        {monthlyPayment > 0 && totalAmount > 0 && (
          <div>
            <h3>Monthly Payment: R{monthlyPayment}</h3>
            <h3>Total Amount: R{totalAmount}</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default InterestCalculator;