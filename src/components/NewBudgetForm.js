/* Based on Exp Tracker Project
    >> renaming done!
    >> Routing???

 transactions: {
    traderId: [ 
      {
        traderId: traderId1,
        action: 'buy',
        amount: 10,
        stockName: APL,
        id: trans1
      },
      {
        traderId: traderId1,
        action: 'buy',
        amount: 20,
        stockName: FB,
        id: trans2
      },
    ],
    ....
*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBudget } from '../features/budgets/budgetsSlice';
import { selectTransactions } from '../features/transactions/transactionsSlice';

export default function NewBudgetForm({ budget }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(budget.amount);
  const transactions = useSelector(selectTransactions);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editBudget({ traderId: budget.traderId, amount: amount }));
  };

//Add Bought vs Sold conditional logic. Maybe add 'Gain/Loss' field via NewTransactionForm and have it participate in remainingFunds calc
  const calculateTotalBought = () => {
      return transactions[budget.traderId]
      .filter((transaction) => transaction.action==='bought')
      .map((transaction) => transaction.amount)
      .reduce((amount1, amount2) => amount1 + amount2, 0);
  };

  const calculateTotalSold = () => {
      return transactions[budget.traderId]
      .filter((transaction) => transaction.action==='sold')
      .map((transaction) =>  transaction.amount)
      .reduce((amount1, amount2) => amount1 + amount2, 0);
    };

  const getFundsRemainingClassName = (amount) => {
    if (parseFloat(amount) === 0) {
      return null;
    }

    return parseFloat(amount) > 0 ? 'positive' : 'negative';
  };

  const remainingFunds = Number.parseFloat(budget.amount - calculateTotalBought() + calculateTotalSold()).toFixed(2);
  const fundsRemainingClassName = getFundsRemainingClassName(remainingFunds);

  return (
    <li className="budget-container">
      <div className="category-label">Trader</div>{' '}
      <div className="category-wrapper">
        <h3 className="category-value">{budget.traderId}</h3>
        <form onSubmit={handleEdit} className="budget-form">
          <input
            className="amount-input"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            type="number"
            step="0.01"
          />
          <button className="update-button">Update</button>
        </form>
      </div>
      <h4 className={`remaining-funds ${fundsRemainingClassName}`}>
        Funds Remaining: {remainingFunds}
      </h4>
    </li>
  );
}