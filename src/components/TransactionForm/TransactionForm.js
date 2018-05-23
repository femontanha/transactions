import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './TransactionForm.css';

const TransactionForm = (props) => {
  return (
    <form className="transaction-form">
      <input className="transaction-form__input transaction-form__input-desc" type="input" placeholder="Add some description" />
      <input className="transaction-form__input transaction-form__input-number" type="number" placeholder="100" />
      <select className="transaction-form__input transaction-form__select">
        <option>Income</option>
        <option>Expense</option>
      </select>
      <Button onClick={ props.submitForm } >Add</Button>
    </form>
  );
};

TransactionForm.propTypes = {
  submitForm: PropTypes.func.isRequired
};

export default TransactionForm;
