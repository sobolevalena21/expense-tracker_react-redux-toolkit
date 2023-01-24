import React from 'react';
import { useSelector } from 'react-redux';
import { selectBudgets } from './budgetsSlice';
import NewBudgetForm from '../../components/NewBudgetForm.js';
import ROUTES from "../../app/routes";

const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  return (
    <ul className='comments-container'>
      { budgets.map(budget => <NewBudgetForm budget={budget} key={budget.traderId}/>) }
    </ul>
  );
};

export default Budgets;