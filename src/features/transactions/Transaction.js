// The Transaction component uses the react-router-dom method useParams() to determine the transactionId to render. Therefore, it needs the full set of transactions to find the appropriate transaction object to render. >> need to use useSelector to get all the transactions in state

import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectTransactions } from './transactionsSlice.js';

export default function Transaction() { //Trader???? Shouldn't it be named Transaction? Renamed.
  const transactions = useSelector(selectTransactions); // replace this with a call to your selector to get all the transactions in state
  let { transactionId } = useParams();
  const transaction = transactions[transactionId];

  return (
    <section>
      <h1>{transaction.name}</h1>
      <ul className="cards-list">
        {transaction.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to="/transactions/new" className="button center">
        Create New Transaction
      </Link>
    </section>
  );
}
