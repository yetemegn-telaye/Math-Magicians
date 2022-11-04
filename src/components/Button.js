import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
  }

  render() {
    const { innerVal, onClickHandler, classN } = this.props;
    return (
      <div className={classN}>
        <button type="button" onClick={onClickHandler}>{innerVal}</button>
      </div>
    );
  }
}
Button.propTypes = {
  innerVal: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  classN: PropTypes.string.isRequired,
};
export default Button;
