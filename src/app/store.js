import { configureStore } from "@reduxjs/toolkit";
import tradersReducer from "../features/traders/tradersSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";
import cardsReducer from "../features/cards/cardsSlice.js";

export default configureStore({
  reducer: {
    traders: tradersReducer,
    transactions: transactionsReducer,
    cards: cardsReducer,
  },
});