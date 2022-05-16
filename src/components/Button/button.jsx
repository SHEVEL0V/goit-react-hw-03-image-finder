import PropTypes from 'prop-types';
import s from './button.module.css';

export default function Button({ onClick }) {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
