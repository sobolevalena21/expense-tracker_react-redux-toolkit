/*
Based on Exp Tracker Project
    >> renaming done!
    >> Routing ?

>>>For the transactionsSlice: transactions grouped by TraderId

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
    ]

    traderId2: [ 
      {
        traderId: traderId2,
        action: 'buy',
        amount: 30,
        stockName: APL,
        id: trans3
      },
      {
        traderId: traderId2,
        action: 'buy',
        amount: 40,
        stockName: FB,
        id: trans4
      },
    ]


addTransaction() and deleteTransaction(). Each of these action creators will receive an action.payload value that is a transaction object like so:
transaction = {
  traderId: traderId1,
  action: 'buy',
  amount: 10,
  stockName: APL,
  id: trans1
      }
*/

import { createSlice } from "@reduxjs/toolkit";

export const TRADERS = ['Trader 1', 'Trader 2']; //hardcoded
export const STOCKS = ['Stock A', 'Stock B', 'Stock C']; //hardcoded
export const ACTIONS = ['bought', 'sold'];

const initialState = Object.fromEntries(TRADERS.map(trader => [trader, []]))

export const transactionsSlice = createSlice({
   name: 'transactions', 
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
     // add the new transaction object (action.payload) to the correct trader’s transaction list in the transactions state object. Will be dispatched in NewTransactionFrom.js
      const traderId = action.payload.traderId;
      state[traderId].push(action.payload);//seems to skip the level in the store's state object, aka 'transactions' key, but it knows to go there right away because we have [ name: 'transactions' ] specified earlier. Will be dispatched in NewTransactionFrom.js
    },
    deleteTransaction: (state, action) => { 
      const id = action.payload.id;
      const traderId = action.payload.traderId;
      // It should delete the old transaction (action.payload) from the correct category’s transaction list in the transactions state object.
      // 1. Find the category in `state` that matches the `category` property on `action.payload`
      // 2.  Filter out the old transaction (the transaction with an `id` matching the `id` property on `action.payload`) from that category's transaction array. Filter means leave only what is not the specified id) 
      state[traderId] = state[traderId].filter(transaction => transaction.id !== id)
    }
  },
})

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []); //!!!
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;


/*
Based on Fleshcards Project:
Now that you can create traders, your next task is to build out the necessary functionality to add transactions to your app. This will involve creating two new slices—one for the transactions themselves and one for the cards that comprise them—and adding an action to your traders slice to associate transactions with the trader to which they belong. To start, create in the src/features/transactions directory, create a new file containing a slice for transactions

state for transactions:
{
    transactions: {
        transactions: {
        '456': {
            id: '456',
            traderId: '123',
            name: 'transaction 1'
            icon: 'icon url',
            cardIds: ['789', '101', '102']
            }
        }
    }
}
______________
import { addTransactionIdToTrader } from '../traders/tradersSlice.js';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: {}, //This inner transactions object will eventually hold all transactions keyed by id (aka the key for each transaction object will = transaction's id, see state sample above)
  },
   reducers: {
    addTransaction: (state, action) => {
        // addTransaction action - will receive a payload of the form { id: '123', name: 'transaction name', traderId: '456', cardIds: ['1', '2', '3', ...]}.
        const { id } = action.payload;  //need this to define these variables and assign them to the payload's values. These seem to set the need for the specified parameters for the action function when used later!? aka function addTransaction(id).
        state.transactions[id] = action.payload; 
    }
   }

});

//Conceptually, the actions of creating a new transaction (addTransaction from transactionsSlice) and associating it with its trader (addTransactionIdToTrader in tradersSlice) are a part of a single process. Back in the transactions slice file, write an action creator that returns a thunk that dispatches these two actions one after the other. This new thunk action creator is the one that you will dispatch when a user creates a new transaction. >> In theory, could we omit this complicated thunk and just dispatch the two actions right in the handleSubmit in the NewTransactionForm ??? After testing it, YES, but complications (refer to NewTransactionForm.js file for detailed explanation)

export const thunkForTransactionCreation = (transaction) => {
    const { id, traderId} = transaction;
    return (dispatch) => {
        dispatch(transactionsSlice.actions.addTransaction(transaction));
        dispatch(addTransactionIdToTrader({ traderId: traderId, transactionId: id }))
    }
};


export const selectTransactions = (state) => state.transactions.transactions;
export const { addTransaction } = transactionsSlice.actions;


export default transactionsSlice.reducer;

*/