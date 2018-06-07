import base from '../rebase';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const CALCULATE_BALANCE = 'CALCULATE_BALANCE';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAIL = 'FETCH_TRANSACTIONS_FAIL';

export const ORDER_BY_CREDIT = 'ORDER_BY_CREDIT';
export const ORDER_BY_DEBIT = 'ORDER_BY_DEBIT';

export const addTransaction = transaction => ({ type: ADD_TRANSACTION, transaction });
export const fetchTransactions = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRANSACTIONS });
    base.fetch('transactions', {
      context: this,
      asArray: true,
      then: transactions => dispatch({ type: FETCH_TRANSACTIONS_SUCCESS, payload: transactions }),
      onFailure: (error) => dispatch({ type: FETCH_TRANSACTIONS_FAIL, payload: error }),
    })
  }
}

export const orderByCredit = () => ({ type: ORDER_BY_CREDIT });
export const orderByDebit = () => ({ type: ORDER_BY_DEBIT });
