import React, { Component } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBalance from '../../components/TransactionBalance/TransactionBalance';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import './Transaction.css';

const list = [
  {
    id: 1,
    name: 'Outback',
    value: 100
  },
  {
    id: 2,
    name: 'Salary',
    value: -100
  },
  {
    id: 3,
    name: 'Netflix',
    value: -39
  },
];

class TransactionContainer extends Component {

  submitForm(e) {
    e.preventDefault();
  }

  render () {
    return (
      <div className="transaction">

        {/* Form */}
        <TransactionForm submitForm={ this.submitForm } />

        {/* Transactions List */}
        <TransactionList list={ list }/>

        {/* Balance */}
        <TransactionBalance balance={ 100 } />

      </div>
    );
  }
}

export default TransactionContainer;
