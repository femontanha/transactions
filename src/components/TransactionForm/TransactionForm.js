import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import './TransactionForm.css';

class TransactionForm extends Component {
  componentDidMount() {
    this.input_description.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const type = this.select.value;
    let value = this.input_value.value;

    if (type === 'debit') value = value * -1;

    const transaction = {
      description: this.input_description.value,
      value,
      type
    }

    this.props.addTransaction(transaction);
    this.form.reset();
  }

  render() {
    return (
      <form ref={(form) => this.form = form} className="transaction-form" onSubmit={ this.handleSubmit }>
        <input
          className="transaction-form__input transaction-form__input-desc"
          type="input"
          placeholder="Add some description"
          ref={(input) => this.input_description = input}
          maxLength="35"
          required
        />
        <select required ref={(select) => this.select = select} className="transaction-form__input transaction-form__select">
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
        <input
          className="transaction-form__input transaction-form__input-number"
          type="number"
          placeholder="100"
          min="0.01"
          max="9999.99"
          step="0.01"
          ref={(input) => this.input_value = input}
          required
        />
        <Button>Add</Button>
      </form>
    )
  }
}

TransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired
};

export default TransactionForm;
