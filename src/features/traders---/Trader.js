// import NewTraderForm from "../../components/NewTraderForm";
// import { Link, useParams } from "react-router-dom";
// import ROUTES from "../../app/routes";
// import { useSelector } from 'react-redux';
// import { selectTraders } from './tradersSlice.js';
// import { selectTransactions } from '../transactions/transactionsSlice.js';

// export default function Trader() {
//   const traders = useSelector(selectTraders); // replace this with a call to your selector to select all the traders in state
//   const transactions = useSelector(selectTransactions); // replace this with a call to your selector to select all the transactions in state
//   let { trader } = useParams();
//   const trader = traders[trader];
//   const transactionsForTrader = trader.transactionIds.map((transactionId) => transactions[transactionId]);

//   return (
//     <section>
//       <img src={trader.icon} alt="" className="trader-icon" />
//       <h1>Trader: {trader.name}</h1>
//       <ul className="transactions-list">
//         {transactionsForTrader.map((transaction) => (
//           <li className="transaction" key={transaction.id}>
//             <Link to={ROUTES.transactionRoute(transaction.id)}>{transaction.name}</Link>
//           </li>
//         ))}
//       </ul>
//       <Link to="/transactions/new" className="button center">
//         Create New Transaction
//       </Link>
//     </section>
//   );
// }
