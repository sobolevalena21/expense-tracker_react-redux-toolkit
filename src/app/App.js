/* Based on Exp Tracker Project
    >> renaming done!
    >> Routing???
*/
import Transactions from '../features/transactions/Transactions';
import Budgets from '../features/budgets/Budgets';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import ROUTES from "./routes";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.budgetsRoute()} activeClassName="active">
              Budgets
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.transactionsRoute()} activeClassName="active">
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.portfoliosRoute()} activeClassName="active">
              Portfolios
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/budgets">
          <Budgets />
        </Route>
        <Route path="/transactions">
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;


/* 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import NewTransactionForm from "../components/NewTransactionForm";
import NewTraderForm from "../components/NewTraderForm";
import Traders from "../features/traders/Traders";
import Trader from "../features/traders/Trader";
import Transaction from "../features/transactions/Transaction";
import Transactions from "../features/transactions/Transactions";
import ROUTES from "./routes";
import './App.css';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.tradersRoute()} activeClassName="active">
              Traders
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.transactionsRoute()} activeClassName="active">
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.setupRoute()} activeClassName="active">
              User Setup
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/traders">
          <TradersRoutes />
        </Route>
        <Route path="/transactions">
          <TransactionRoutes />
        </Route>
      </Switch>
    </Router>
  );
}

function TradersRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTraderForm />
        </Route>
        <Route path={`${match.path}/:traderId`}>
          <Trader />
        </Route>
        <Route path={`${match.path}`}>
          <Traders />
        </Route>
      </Switch>
    </>
  );
}

function TransactionRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTransactionForm />
        </Route>
        <Route path={`${match.path}/:transactionId`}>
          <Transaction />
        </Route>
        <Route path={`${match.path}`}>
          <Transactions />
        </Route>
      </Switch>
    </>
  );
}

*/