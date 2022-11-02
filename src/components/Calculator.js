import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="grid-item result">0</div>
        <div className="grid-item">AC</div>
        <div className="grid-item">+/-</div>
        <div className="grid-item">%</div>
        <div className="grid-item orange-item">+</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
        <div className="grid-item orange-item">x</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item orange-item">-</div>
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item orange-item">+</div>
        <div className="grid-item zero">0</div>
        <div className="grid-item">.</div>
        <div className="grid-item orange-item">=</div>
      </div>
    );
  }
}
export default Calculator;
