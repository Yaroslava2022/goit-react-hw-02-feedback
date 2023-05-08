import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.rating}>
      <li className={css.ratingText}>Good: {good} </li>
      <li className={css.ratingText}>Neutral: {neutral}</li>
      <li className={css.ratingText}>Bad: {bad}</li>
      <li className={css.ratingText}>Total: {total}</li>
      <li className={css.ratingText}>PositivePercentage: {`${positivePercentage}%`}</li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};