import React, { Component } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBalance from '../../components/TransactionBalance/TransactionBalance';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import './Transaction.css';

const list = [
  {
    id: 0,
    description: 'Salário',
    type: 'income',
    value: 1000
  },
  {
    id: 1,
    description: 'Netflix',
    type: 'expense',
    value: 100
  },
  {
    id: 2,
    description: 'Internet',
    type: 'expense',
    value: 100
  },
];

class TransactionContainer extends Component {
  state = {
    transactions: list
  }

  calculateBalance = (transactions) => {
    return transactions.reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  }

  onSave = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
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
