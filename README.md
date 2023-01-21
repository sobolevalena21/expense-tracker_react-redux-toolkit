# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for traders, transactions, and cards.

# Routes

- `/new-trader` – form to create a new trader
- `/traders` – index of all traders
- `/traders/:traderId` – page for an individual trader
- `/new-transaction` – form to create a new transaction
- `/transactions` – index of all transactions
- `/transactions/:transactionId` – page for an individual transaction

# To Test

1. Create traders
2. Create transactions
3. Visit the page for an individual transaction and flip the cards over

# Questions

Is this appropriately scoped? Does it have too many features? Too few?
