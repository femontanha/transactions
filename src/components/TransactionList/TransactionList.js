import React from 'react';
import PropTypes from 'prop-types';
import './TransactionList.css';

const renderTransactionList = (props) => {
    const items = props.list.map((item, index) => {
      return (
        <li key={ index }>
          <span className="transaction__list-description">{ item.description }</span>
          <span className="transaction__list-value">{ item.value }</span>
          {/* <button onClick={ props.onDelete.bind(this, index) }>Delete</button> */}
        </li>
      );
    });

    return items;
};

const TransactionList = (props) => {
  return (
    <ul className="transaction__list">
      { renderTransactionList(props) }
    </ul>
  );
};

TransactionList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default TransactionList;
