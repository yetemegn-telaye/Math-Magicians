const calculate = require('../logic/calculate'); // You need to import the file you want to test

test('Performs an operation on numbers and returns an object with result', () => {
  const obj = {
    total: '0',
    next: '2',
    operation: '+',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({ total: '2', next: null, operation: null });
});
