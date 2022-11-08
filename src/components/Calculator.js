import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Header from './Header';
import '../styles/calculator.css';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHandler = (event) => {
    const buttonName = event.target.innerHTML;
    const { total, next, operation } = calcObj;

    const res = calculate({ total, next, operation }, buttonName);
    setCalcObj(res);
  };
  const { total, next, operation } = calcObj;
  return (
    <>
      <Header />
      <div className="calc-body">
        <h3>Lets do some math!</h3>
        <div className="calculator-container">
          <div className="grid-item result">
            {total}
            {operation}
            {next}
          </div>
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="AC" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="+/-" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="%" />
          <Button classN="grid-item operator-item" onClickHandler={onClickHandler} innerVal="÷" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="7" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="8" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="9" />
          <Button classN="grid-item operator-item" onClickHandler={onClickHandler} innerVal="x" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="4" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="5" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="6" />
          <Button classN="grid-item operator-item" onClickHandler={onClickHandler} innerVal="-" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="1" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="2" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="3" />
          <Button classN="grid-item operator-item" onClickHandler={onClickHandler} innerVal="+" />
          <Button classN="grid-item zero" onClickHandler={onClickHandler} innerVal="0" />
          <Button classN="grid-item" onClickHandler={onClickHandler} innerVal="." />
          <Button classN="grid-item operator-item" onClickHandler={onClickHandler} innerVal="=" />
        </div>
      </div>

    </>
  );
};

export default Calculator;
