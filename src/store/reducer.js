import { combineReducers } from 'redux';
import * as actionTypes from './actions';

const calculateBalance = (transactions = []) => {
  return transactions.reduce((acc, item) => {
    return acc + item.value;
  }, 0);
};

const filterTransactions = (transactions = []) => {
  let credit = [];
  let debit = [];

  transactions.forEach((item) => {
    if (item.type === 'credit') {
      credit.push(item);
    } else {
      debit.push(item);
    }
  });

  return {
    credit,
    debit,
  }
};

const transactions = (state = [], action) => {
  let transaction;

  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return [...state, action.transaction];
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return [...action.payload];
    case actionTypes.ORDER_BY_CREDIT:
      transaction = filterTransactions(state)
      return [...transaction.credit, ...transaction.debit];
    case actionTypes.ORDER_BY_DEBIT:
      transaction = filterTransactions(state)
      return [...transaction.debit, ...transaction.credit];
    default:
      return state;
  }
};

const balance = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return state + Number(action.transaction.value);
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return calculateBalance(action.payload);
    default:
      return state;
  }
};

const isFetching = (state, action) => {
  if (action.type === actionTypes.FETCH_TRANSACTIONS) {
    return true;
  }

  return false;
};

export default combineReducers({
  transactions,
  balance,
  isFetching,
});
