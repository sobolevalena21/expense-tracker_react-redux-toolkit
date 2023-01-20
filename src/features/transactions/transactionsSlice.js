/* 
addTransaction() and deleteTransaction(). Each of these action creators will receive an action.payload value that is a transaction object like so:
  transaction = {
      {
        category: 'food',
        description: 'groceries on 1/12/2021',
        amount: 50,
        id: 456
      }

Full store's state object example is in Store.js file notes 
*/

import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

export const transactionsSlice = createSlice({
   name: 'transactions', ////this also makes sure to provide access only to the budget's part of the store's state object >> so less digging needed!
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
     // add the new transaction object (action.payload) to the correct category’s transaction list in the transactions state object.
      const category = action.payload.category;
      state[category].push(action.payload);//seems to skip the level in the store's state object, aka 'transactions' key, but it knows to go there right away because we have [ name: 'transactions' ] specified earlier.
    },
    deleteTransaction: (state, action) => { 
      const id = action.payload.id;
      const category = action.payload.category;
      // It should delete the old transaction (action.payload) from the correct category’s transaction list in the transactions state object.
      // 1. Find the category in `state` that matches the `category` property on `action.payload`
      // 2.  Filter out the old transaction (the transaction with an `id` matching the `id` property on `action.payload`) from that category's transaction array. Filter means leave only what is not the specified id) 
      state[category] = state[category].filter(transaction => transaction.id !== id)
    }
  },
})

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
