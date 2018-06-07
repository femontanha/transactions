import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTransaction, fetchTransactions, orderByCredit, orderByDebit } from '../../store/actions';

import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBalance from '../../components/TransactionBalance/TransactionBalance';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import './Transaction.css';

class TransactionContainer extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  // onSave = (transaction) => {
  //   base.post('transactions', {
  //     data: newTransaction,
  //     context: this,
  //     then: () => {
  //       // TODO: Toast?
  //       console.warn('Transaction Added');
  //     }
  //   });
  // }

  onDelete = (key) => {
    const { transactions } = this.state;
    const newTransactions = transactions.filter((item) => item.key !== key);

    this.setState({
      transactions: newTransactions
    });
  }

  render () {
    const {
      transactions,
      addTransaction,
      balance,
      isFetching,
      orderByCredit,
      orderByDebit,
    } = this.props;

    return (
      <div className="transaction">
        <TransactionForm addTransaction={ addTransaction } />
        <div>
          <button onClick={ orderByCredit }>Order by: credit</button>
          <button onClick={ orderByDebit }>Order by: debit</button>
        </div>
        <TransactionList isFetching={ isFetching } onDelete={ this.onDelete } list={ transactions }/>
        <TransactionBalance balance={ balance } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    balance: state.balance,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = {
  addTransaction,
  fetchTransactions,
  orderByCredit,
  orderByDebit,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer);
