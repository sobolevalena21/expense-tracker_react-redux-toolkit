/* Based on Exp Tracker Project
    >> renaming done!
    >> Routing ?

    In the Exp Tracker Project, Transaction.js is located in the components folder, and here - in the folder: features > transactions. But both serves the same purpose. Where is better to place it, in Components or Features???

    In the Exp Tracker Project, there are Transactions.js (in features) and TransactionList.js (in components). ? >>
    Transactions.js renders TransactionList and TransactionForm, basically serrving just like a seperator for the page's structure: Budgtes area, then Transactions area.) Would it make sense to merge them like in Fleshcards? No, cause in Fleshcards each Quiz (aka Transaction) in the list opens in the new window (rounting). Do we need that functionality? Maybe yes, if we want to add features on the new window not available on the TransactionList (i.e. Click on the Transac in the List >> More Transaction details, delete Buttons, etc....). For now, no need >> so TransactionList.js == Transactions.js >> kept both for now. Maybe will try to merge it later.
*/

import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transactionsSlice';
import NewTransactionForm from '../../components/NewTransactionForm';
import TransactionList from '../../components/TransactionList';
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

const Transactions = () => {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className="comments-container">
      <NewTransactionForm />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;


/*
 In fleshcards: The Transactions component should render a Link for each transaction value in the transactions slice of state. Aka click on the Transaction in the List, it will open in the new window.

import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import {selectTransactions } from './transactionsSlice.js';


export default function Transactions() {
  const transactions = useSelector(selectTransactions); // replace this with a call to your selector to get all the transactions in state
  return (
    <section className="center">
      <h1>Transactions</h1>
      <ul className="transactions-list">
        {Object.values(transactions).map((transaction) => (
          <Link key={transaction.id} to={ROUTES.transactionRoute(transaction.id)}>
            <li className="transaction">{transaction.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newTransactionRoute()} className="button">
        Create New Transaction
      </Link>
    </section>
  );
}
*/