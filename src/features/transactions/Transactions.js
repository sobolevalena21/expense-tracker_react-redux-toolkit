/*
  The Transactions component should render a Link for each transaction value in the transactions slice of state.
*/


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


/*
export default function Traders() {
  const traders = useSelector(selectTraders); // call to your selector to select all the traders in state

  return (
    <section className="center">
      <h1>Traders</h1>
      <ul className="traders-list">
        {Object.values(traders).map((trader) => (
          <li className="trader" key={trader.id}>
          <Link to={ROUTES.traderRoute(trader.id)} className="trader-link">
           <div className="trader-container">
             <img src={trader.icon} alt="" />
             <div className="text-content">
               <h2>{trader.name}</h2>
               <p>{trader.transactionIds.length} Transactions</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTraderRoute()}
        className="button create-new-trader-button"
      >
        Create New Trader
      </Link>
    </section>
  );
}



*/