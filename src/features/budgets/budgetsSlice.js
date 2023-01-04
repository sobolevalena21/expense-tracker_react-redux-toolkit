/* 
action.payload object:
[ 
    { category: 'housing', amount: 400 },
    { category: 'food', amount: 100 },
    ...
  ]
Because of the selector function defined at the end of the file, the state keyword only provide access to the budget property.

Full store's state object example is in Store.js file notes 
*/

import { createSlice } from '@reduxjs/toolkit';
 
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))
 
//With Toolkit
//action.payload will have a category and amount property. editBudget should update the state by finding the budget object whose .category value matches action.payload.category and changing with the .amount value to action.payload.amount.
export const budgetsSlice = createSlice({
  name: 'budgets', //this also makes sure to provide access only to the budget's part of the store's state object >> so less digging needed!
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const budgetCategory = state.find(budget => budget.category === action.payload.category)
      budgetCategory.amount = action.payload.amount //immer gives an error if have the word "return" here
    }
  },
});
 
export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;


