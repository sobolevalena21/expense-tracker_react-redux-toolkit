/*
trader object should have the following: {id: '123456', name: 'name of trader', icon: 'icon url', transactionIds: []}.

import addTrader and dispatch it from the event handler that runs when the new trader form is submitted:
    You will need to import and call the useDispatch() method in order to dispatch actions to the store.
    You will need to include the trader’s name in the action payload as well as an id property (you should generate a value for this property by calling uuidv4()  ), and an icon property.
    The icon variable from the useSelect() hook holds the URL for the icon image selected by the user.

Example:
import { v4 as uuidv4 } from 'uuid';

export default function TransactionForm({ categories }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        category: category,
        description: description,
        amount: parseFloat(amount),
        id: uuidv4(),
      })
    );
    setCategory(CATEGORIES[0]);
    setDescription('');
    setAmount(0);
  };

*/

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTrader } from "../features/traders/tradersSlice.js";
import { useDispatch } from 'react-redux';

export default function NewTraderForm() {
  const [name, setName] = useState(""); //name is an input field on the page 
  const [icon, setIcon] = useState(""); //icon is an input field on the page 
  const history = useHistory();
  const dispatch = useDispatch();

//On submit, the trader object should have the following: {id: '123456', name: 'name of trader', icon: 'icon url', transactionIds: []}. an empty transactionIds array must be created via the addTrader action in the slice file, not here!!!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    // dispatch your addTrader action here
    dispatch(addTrader({
      id: uuidv4(),
      name: name,
      icon: icon
    }

    ));
    history.push(ROUTES.tradersRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Add new trader</h1>
        <div className="form-section">
          <input
            id="trader-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Trader Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add trader</button>
      </form>
    </section>
  );
}
