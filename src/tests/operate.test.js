const operate = require('../logic/operate');

describe('Performs an operation on three numbers and returns a number result', () => {
  test('Performs addition on 2 numbers', () => {
    const obj = {
      total: '0',
      next: '2',
      operation: '+',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('2');
  });

  test('Performs multiplication on the numbers', () => {
    const obj = {
      total: '0',
      next: '2',
      operation: 'x',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('0');
  });

  test('Performs %  on numbers cannot be divided by zero', () => {
    const obj = {
      total: '4',
      next: '0',
      operation: '%',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Performs ÷ on numbers cannot be divided by zero', () => {
    const obj = {
      total: '8',
      next: '0',
      operation: '÷',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe("Can't divide by 0.");
  });

  test('Performs - on numbers', () => {
    const obj = {
      total: '8',
      next: '4',
      operation: '-',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('4');
  });
});
