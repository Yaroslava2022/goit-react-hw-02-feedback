import React from "react";
import css from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => onLeaveFeedback(options)}
    >
      {options}
    </button>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};