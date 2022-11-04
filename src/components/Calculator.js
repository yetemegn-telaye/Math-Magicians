import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (event) => {
    const buttonName = event.target.innerHTML;
    const { total, next, operation } = this.state;

    const res = calculate({ total, next, operation }, buttonName);
    this.setState(res);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="grid-item result">
          {total}
          {operation}
          {next}
        </div>
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="AC" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="+/-" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="%" />
        <Button classN="grid-item operator-item" onClickHandler={this.onClickHandler} innerVal="÷" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="7" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="8" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="9" />
        <Button classN="grid-item operator-item" onClickHandler={this.onClickHandler} innerVal="x" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="4" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="5" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="6" />
        <Button classN="grid-item operator-item" onClickHandler={this.onClickHandler} innerVal="-" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="1" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="2" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="3" />
        <Button classN="grid-item operator-item" onClickHandler={this.onClickHandler} innerVal="+" />
        <Button classN="grid-item zero" onClickHandler={this.onClickHandler} innerVal="0" />
        <Button classN="grid-item" onClickHandler={this.onClickHandler} innerVal="." />
        <Button classN="grid-item operator-item" onClickHandler={this.onClickHandler} innerVal="=" />
      </div>
    );
  }
}
export default Calculator;
