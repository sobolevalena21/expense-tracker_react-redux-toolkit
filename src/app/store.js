import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";
import budgetsReducer from "../features/budgets/budgetsSlice";
//import cardsReducer from "../features/cards/cardsSlice.js";
//import tradersReducer from "../features/traders/tradersSlice";


export default configureStore({
  reducer: {
    //traders: tradersReducer,
    //cards: cardsReducer,
    transactions: transactionsReducer,
    budgets: budgetsReducer
  },
});