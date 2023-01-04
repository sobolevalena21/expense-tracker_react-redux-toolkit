import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../features/transactions/transactionsSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';

export default configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
});

/*
///////////////////////////////////////////////////////
    Transactions in Store's State object example:
        {
  budgets: [ 
    { category: 'housing', amount: 400 },
    { category: 'food', amount: 100 },
    ...
  ],
  transactions: {
    food: [ 
      {
        category: 'food',
        description: 'groceries on 1/12/2021',
        amount: 50,
        id: 456
      },
      {
        category: 'food',
        description: 'dinner on 1/16/2021',
        amount: 12,
        id: 789
      },
    ]
    housing: [ 
      {
        category: 'housing',
        description: 'rent',
        amount: 400,
        id: 123
      }
    ]
  }
 
}

*/
