/*
state for traders:
{
    traders: {
        traders: {
        '123': {
            id: '123',
            name: 'name 1',
            icon: 'icon url',
            transactionIds: ['456', '789']
            }
        }
    }
}



import { createSlice } from "@reduxjs/toolkit";


export const tradersSlice = createSlice({
  name: 'traders',
  initialState: {
    traders: {}, //This inner traders object will eventually hold all traders keyed by id (aka the key for each trader object will = trader;s id, see state sample above)
  },
   reducers: {
    addTrader: (state, action) => {
        //action's payload looks like this: {id: '123456', name: 'name of trader', icon: 'icon url'}. Store these values in the state as a new trader object. When a trader is first created, it won’t have any associated transactions, but you should still create an empty transactionIds array, containing the ids of each transaction associated with the trader. >> const transactionIds = [] >> must be created here and not with the Form submition.
        const { id, name, icon } = action.payload;  //need this to define these variables and assign them to the payload's values. These seem to set the need for the cpecified parameters for the action function when used later!? aka function addTrader(id, name, icon). || an empty transactionIds array must be created here, not in the NewTraderForm!!!
        state.traders[id] = {
            id: id,
            name: name,
            icon: icon,
            transactionIds: [] 
        }
    },
    //you should add an action to your traders slice that adds a transaction’s id to the transactionIds array of the trader with which the newly transaction is associated. This action will receive a payload of the form {transactionId: '123', traderId: '456'}. Make sure to export this action creator for use elsewhere in the app.
    addTransactionIdToTrader: (state, action) => {
        const { transactionId, traderId } = action.payload; //these seem to be the setting for action function parameters!? aka function addTransactionIdToTrader(transactionId, traderId)
        state.traders[traderId].transactionIds.push(transactionId)
    } 
   }

});

export const selectTraders = (state) => state.traders.traders;
export const { addTrader, addTransactionIdToTrader } = tradersSlice.actions;


export default tradersSlice.reducer;

*/