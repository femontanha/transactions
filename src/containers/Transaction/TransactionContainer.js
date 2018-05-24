import React, { Component } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBalance from '../../components/TransactionBalance/TransactionBalance';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import './Transaction.css';

import base from '../../rebase';

class TransactionContainer extends Component {
  state = {
    transactions: [],
    isFetching: true
  }

  componentDidMount() {
    base.syncState('transactions', {
      context: this,
      state: 'transactions',
      asArray: true,
      then: () => {
        this.setState({ isFetching: false });
      }
    })
  }

  calculateBalance = (transactions) => {
    return transactions.reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  }

  onSave = (transaction) => {
    const newTransaction = [...this.state.transactions, transaction];

    this.setState({
      transactions: newTransaction
    });

    base.post('transactions', {
      data: newTransaction,
      context: this,
      then: () => {
        // TODO: Toast?
        console.warn('Transaction Added');
      }
    });
  }

  onDelete = (key) => {
    const { transactions } = this.state;
    const newTransactions = transactions.filter((item) => item.key !== key);

    this.setState({
      transactions: newTransactions
    });
  }

  render () {
    const { transactions } = this.state;

    return (
      <div className="transaction">
        <TransactionForm onSave={ this.onSave } />
        <TransactionList isFetching={ this.state.isFetching } onDelete={ this.onDelete } list={ transactions }/>
        <TransactionBalance balance={ this.calculateBalance(transactions) } />
      </div>
    );
  }
}

export default TransactionContainer;
