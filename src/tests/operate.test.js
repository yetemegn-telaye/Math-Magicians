const operate = require('../logic/operate');

test('Performs an operation on three numbers and returns a number result', () => {
  const obj = {
    total: '0',
    next: '2',
    operation: '+',
  };
  expect(operate(obj.total, obj.next, obj.operation)).toBe('2');
});
