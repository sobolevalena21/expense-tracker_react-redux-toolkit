/*
import the traders selector defined in your tradersSlice and use it to access all the traders in state, and replace the empty object currently assigned to traders with the traders in state.

Next, you’ll need to hook the new trader form up to the action creators your slice generates. >> In src/components/NewTraderForm.js, import addTrader and dispatch it from the event handler that runs when the new trader form is submitted.



import NewTraderForm from "../../components/NewTraderForm";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectTraders } from './tradersSlice.js';

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