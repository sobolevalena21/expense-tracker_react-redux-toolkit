/*
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

*/

import { createSlice } from "@reduxjs/toolkit";
import { addTransactionIdToTrader } from '../traders/tradersSlice.js';


export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: {}, //This inner transactions object will eventually hold all transactions keyed by id (aka the key for each transactionz object will = transaction's id, see state sample above)
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