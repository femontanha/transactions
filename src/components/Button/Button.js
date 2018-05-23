import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  return (
    <button className="btn" onClick={ props.onClick }>
      { props.children }
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
