import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './TransactionList.css';

const renderTransactionList = (props) => {
    const items = props.list.map((item) => {
      return (
        <li key={ item.key } className={ item.type }>
          <span className="transaction__list-description">{ item.description }</span>
          <span className="transaction__list-delete" onClick={ props.onDelete.bind(this, item.key) }>delete item</span>
          <span className={`transaction__list-badge transaction__list-badge--${ item.type }`}>{ item.type }</span>
          <span className="transaction__list-value">{ item.value }</span>
        </li>
      );
    });

  return <ul className="transaction__list">{ items }</ul>;
};

const renderTransactionEmpty = () => {
  return <div className="transaction__list-empty">There is no transactions yet! <span>♥</span></div>;
}

const TransactionList = (props) => {
  return (
    <Fragment>
      { !!props.list.length && renderTransactionList(props) }
      { !props.list.length && renderTransactionEmpty() }
    </Fragment>
  );
};

TransactionList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default TransactionList;
