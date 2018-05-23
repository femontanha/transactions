import React, { Component } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBalance from '../../components/TransactionBalance/TransactionBalance';
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
  render () {
    return (
      <div className="transaction">

        {/* Form */}
        <div>Form</div>

        {/* Transactions List */}
        <TransactionList list={ list }/>

        {/* Balance */}
        <TransactionBalance balance={ 100 } />

      </div>
    );
  }
}

export default TransactionContainer;
