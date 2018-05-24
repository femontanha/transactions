import React, { Component } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBalance from '../../components/TransactionBalance/TransactionBalance';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import './Transaction.css';

import base from '../../rebase';

class TransactionContainer extends Component {
  state = {
    transactions: []
  }

  componentWillMount() {
    base.bindToState('transactions', {
      context: this,
      state: 'transactions',
      asArray: true
    });
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
        console.warn('Transaction Added');
      }
    });
  }

  onDelete = (index) => {
    const { transactions } = this.state;
    const newTransaction = transactions.filter((item) => item.id !== index);

    this.setState({
      transactions: newTransaction
    });
  }

  render () {
    const { transactions } = this.state;

    return (
      <div className="transaction">
        <TransactionForm onSave={ this.onSave } />
        <TransactionList onDelete={ this.onDelete } list={ transactions }/>
        <TransactionBalance balance={ this.calculateBalance(transactions) } />
      </div>
    );
  }
}

export default TransactionContainer;
