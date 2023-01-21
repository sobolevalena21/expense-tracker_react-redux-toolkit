const ROUTES = {
  setupRoute: () => "/setup", //was newQuizRoute > turn into Setup tab
  newTransactionRoute: () => "/transactions/new", //created myself to mimic Traders logic
  transactionRoute: (id) => `/transactions/${id}`, //quizRoute
  transactionsRoute: () => "/transactions", //quizzesRoute
  newTraderRoute: () => "/traders/new", //newTopicRoute
  traderRoute: (id) => `/traders/${id}`, //topicRoute
  tradersRoute: () => "/traders", //topicsRoute
};

export default ROUTES;
