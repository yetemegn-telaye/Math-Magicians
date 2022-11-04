import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { innerVal, onClickHandler, classN } = props;

  return (
    <div className={classN}>
      <button type="button" onClick={onClickHandler}>{innerVal}</button>
    </div>
  );
};

Button.propTypes = {
  innerVal: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  classN: PropTypes.string.isRequired,
};
export default Button;
