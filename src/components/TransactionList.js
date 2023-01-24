/* Based on Exp Tracker Project
    >> renaming done!
    >> Routing ?

    In the Exp Tracker Project, there are Transactions.js (in features) and TransactionList.js (in components). ? >>
    Transactions.js renders TransactionList and TransactionForm, basically serrving just like a seperator for the page's structure: Budgtes area, then Transactions area.) Would it make sense to merge them like in Fleshcards? No, cause in Fleshcards each Quiz (aka Transaction) in the list opens in the new window (rounting). Do we need that functionality? Maybe yes, if we want to add features on the new window not available on the TransactionList (i.e. Click on the Transac in the List >> More Transaction details, delete Buttons, etc....). For now, no need >> so TransactionList.js == Transactions.js >> kept both for now. Maybe will try to merge it later.
*/


import React from 'react';
import Transaction from './Transaction';

export default function TransactionList({ transactions }) {
  return (
    <section className="new-transactions-section">
      <h2>Transactions</h2>
      <ul className="new-transaction-list">
        {transactions.map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
      </ul>
    </section>
  );
}
