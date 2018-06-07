import React from 'react';
import PropTypes from 'prop-types';
import './TransactionBalance.css';

const TransactionBalance = (props) => {
  return (
    <div className="transaction__balance">
      <span className="transaction__balance-name">Balance</span>
      <span className="transaction__balance-value">{ props.balance }</span>
    </div>
  );
};

// TransactionBalance.propTypes = {
//   balance: PropTypes.number.isRequired
// };

export default TransactionBalance;
