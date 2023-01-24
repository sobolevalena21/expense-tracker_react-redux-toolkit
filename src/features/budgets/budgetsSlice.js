/*
//Based on Exp Tracker Project
  >> renaming done!

Will be a part of User Setup

user: {
    name: Elena,
    cashTotal: $100,

    >>>budgets: [
        { trader: trader1, amount: $30 },
        { trader: trader2, amount: $40 },
        ...
    ],

    portfolio: [
        { stockCode: APL, stockBal: $10 },
        { stockCode: FB, stockBal: $20 },
        ...
    ]
}        
    
___________________
 tradersSet is similar to budgets (Exp Tracker Project)
 budgets: [ 
    { category: 'Trader 1', amount: $30 },
    { category: 'Trader 2', amount: $40 },
    ...
  ]
  //action.payload will have a 'trader' and 'amount' property. 
______________
*/

import { createSlice } from '@reduxjs/toolkit';
 
export const TRADERS = ['Trader 1', 'Trader 2']; //hardcoded
const initialState = TRADERS.map(traderId => ({ traderId: traderId, amount: 0 })) //error TraderId is not defined!
 
export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    //editBudget should update the state by finding the budget object whose .trader value matches action.payload.trader and changing with the .amount value to action.payload.amount.
    editBudget: (state, action) => {
      const traderBudget = state.find(budget => budget.traderId === action.payload.traderId)
      //const { amount } = action.payload.amount;
      traderBudget.amount = action.payload.amount //immer gives an error if have the word "return" here
    }
  },
});
 
export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
