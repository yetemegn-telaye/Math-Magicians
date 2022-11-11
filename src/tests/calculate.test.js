const calculate = require('../logic/calculate'); // You need to import the file you want to test

describe('Perform an operation on numbers and returns an object with result', () => {
  test('Checks add operation on two numbers then = is clicked', () => {
    const obj = {
      total: '0',
      next: '2',
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({ total: '2', next: null, operation: null });
  });

  test('Checks operation on more than 2 numbers', () => {
    const obj = {
      total: '0',
      next: '2',
      operation: '+',
    };
    const buttonName = '+';
    expect(calculate(obj, buttonName)).toEqual({ total: '2', next: null, operation: '+' });
  });

  test('Check when buttonName is 0 and next value is 0 and no operation clicked', () => {
    const obj = {
      total: '0',
      next: '0',
      operation: null,
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({});
  });
});
