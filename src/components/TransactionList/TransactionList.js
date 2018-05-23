import React from 'react';
import PropTypes from 'prop-types';
import './TransactionList.css';

const renderTransactionList = (list) => {
    const items = list.map((item) => {
      return (
        <li key={ item.id }>
          <span className="transaction__list-name">{ item.name }</span>
          <span className="transaction__list-value">{ item.value }</span>
        </li>
      );
    });

    return items;
};

const TransactionList = (props) => {
  return (
    <ul className="transaction__list">
      { renderTransactionList(props.list) }
    </ul>
  );
};

TransactionList.propTypes = {
  list: PropTypes.array.isRequired
};

export default TransactionList;
