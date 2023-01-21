/*
import the thunk action creator from your transaction slice and dispatch it from the handleSubmit() event handler that fires when the new transaction form is submitted. Remember, that action creator expects to receive a payload of the form { id: '123', name: 'transaction name', traderId: '456', cardIds: ['1', '2', '3', ...]}. You’ll have to generate an id by calling uuidv4. For now, pass the empty cardIds array variable for the cardIds property (you’ll change that in a later task).


*/


import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { useDispatch, useSelector } from 'react-redux';
import { selectTraders } from '../features/traders/tradersSlice.js';
import { thunkForTransactionCreation } from "../features/transactions/transactionsSlice.js"; //>> tried to replace with the 2 seperate actions, imported below
// import { addTransaction } from "../features/transactions/transactionsSlice.js";
// import { addTransactionIdToTrader } from '../features/traders/tradersSlice.js';

import { addCard } from '../features/cards/cardsSlice.js';



export default function NewTransactionForm() {
  const [name, setName] = useState(""); //is an input field on the Transaction page
  const [cards, setCards] = useState([]);
  const [traderId, setTraderId] = useState("");//is an input field on the Transaction page
  const history = useHistory();
  const traders = useSelector(selectTraders);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    const cardIds = [];
    // create the new cards here and add each card's id to cardIds. >> iterate through the cards in that form’s local state, and for each one: (*) dispatch your addCard action creator. You will have to generate an id for each card using uuidv4. (*) Store the id you create for each card in the cardIds array we’ve provided for you.Remember, your action creator expects to receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}. You want to collect all the cardIds in an array so that you can pass them to the action creator that generates new transactions.  Unlike map(), forEach() always returns undefined and is not chainable.
      cards.forEach((card) => {
      let cardId = uuidv4();
      cardIds.push(cardId);
      dispatch(addCard({ ...card, id: cardId }));
    });


    // create the new transaction here: Conceptually, the actions of creating a new transaction (addTransaction from transactionsSlice) and associating it with its trader (addTransactionIdToTrader in tradersSlice) are a part of a single process. Back in the transactions slice file, write an action creator that returns a thunk that dispatches these two actions one after the other. This new thunk action creator is the one that you will dispatch when a user creates a new transaction. 
    dispatch(thunkForTransactionCreation({
      id: uuidv4(),
      name: name,
      traderId: traderId,
      cardIds: cardIds
    }));

    /*
    >> In theory, could we omit this complicated thunk and just dispatch the two actions right in the handleSubmit in the NewTransactionForm ??? After testing it, YES, it seems that we CAN, but then transactionId in the addTransactionIdToTrader will need a seperate (repetitive) arrangement (2nd dispatch cannot access id parameter in the 1st dispatch). 
        dispatch(addTransaction({
          id: uuidv4(),
          name: name,
          traderId: traderId,
          cardIds: cardIds
        }));
        dispatch(addTransactionIdToTrader({
          traderId: traderId,
          transactionId: transaction.id //error: transaction is not defined
          }))
      */
    history.push(ROUTES.transactionsRoute());
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
  };

  return (
    <section>
      <h1>Create new transaction</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="transaction-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Transaction Title"
        />
        <select
          id="transaction-trader"
          onChange={(e) => setTraderId(e.currentTarget.value)}
          placeholder="Trader"
        >
          <option value="">Trader</option>
          {Object.values(traders).map((trader) => (
            <option key={trader.id} value={trader.id}>
              {trader.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button"
            >
              Remove Card
            </button>
          </div>
        ))}
        <div className="actions-container">
          <button onClick={addCardInputs}>Add a Card</button>
          <button>Create Transaction</button>
        </div>
      </form>
    </section>
  );
}
