import {
  same,
  different,
  greater,
  greaterOrEquals,
  lesser,
  lesserOrEquals,
  add,
  subtract,
  multiply,
  divide,
  modulus,
  total,
  has,
} from '../../composes';

describe('same', () => {
  it('must return true', () => {
    const isSame = same(1)(1);
    expect(isSame).toBeTruthy();
  });
  it('must return false', () => {
    const isSame = same(1)(2);
    expect(isSame).toBeFalsy();
  });
});

describe('different', () => {
  it('must return true', () => {
    const isDifferent = different(1)(2);
    expect(isDifferent).toBeTruthy();
  });
  it('must return false', () => {
    const isDifferent = different(1)(1);
    expect(isDifferent).toBeFalsy();
  });
});

describe('greater', () => {
  it('must return true', () => {
    const isGreater = greater(2)(1);
    expect(isGreater).toBeTruthy();
  });
  it('must return false', () => {
    const isGreater = greater(1)(1);
    expect(isGreater).toBeFalsy();
  });
});

describe('greaterOrEquals', () => {
  it('must return true', () => {
    const isGreater = greaterOrEquals(2)(1);
    const isEquals = greaterOrEquals(1)(1);
    expect(isGreater).toBeTruthy();
    expect(isEquals).toBeTruthy();
  });
  it('must return false', () => {
    const isGreater = greaterOrEquals(1)(2);
    expect(isGreater).toBeFalsy();
  });
});

describe('lesser', () => {
  it('must return true', () => {
    const isLesser = lesser(1)(2);
    expect(isLesser).toBeTruthy();
  });
  it('must return false', () => {
    const isLesser = lesser(2)(1);
    expect(isLesser).toBeFalsy();
  });
});

describe('lesserOrEquals', () => {
  it('must return true', () => {
    const isLesser = lesserOrEquals(1)(2);
    const isEquals = lesserOrEquals(1)(1);
    expect(isLesser).toBeTruthy();
    expect(isEquals).toBeTruthy();
  });
  it('must return false', () => {
    const isLesser = lesserOrEquals(2)(1);
    expect(isLesser).toBeFalsy();
  });
});

describe('add', () => {
  it('must return number', () => {
    const equals = add(2)(2);
    expect(equals).toBe(4);
  });
});

describe('subtract', () => {
  it('must return number', () => {
    const equals = subtract(2)(2);
    expect(equals).toBe(0);
  });
});

describe('multiply', () => {
  it('must return number', () => {
    const equals = multiply(2)(2);
    expect(equals).toBe(4);
  });
});

describe('divide', () => {
  it('must return number', () => {
    const equals = divide(2)(2);
    expect(equals).toBe(1);
  });
});

describe('modulus', () => {
  it('must return number', () => {
    const negative = modulus(-2);
    const positive = modulus(2);
    expect(negative).toBe(2);
    expect(positive).toBe(2);
  });
});

describe('total', () => {
  it('must return the total from an array of objects', () => {
    const values = [{ value: 2 }, { value: 2 }, { value: 2 }, { value: 2 }];
    const eight = total(values)('value');
    expect(eight).toBe(8);
  });
  it('must return the total from an array', () => {
    const values = [2, 2, 2, 2];
    const eight = total(values)();
    expect(eight).toBe(8);
  });
});

describe('has', () => {
  it('shouldd return true with numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const hasFive = has(5);
    expect(hasFive(numbers)).toBeTruthy();
  });
  it('should return true with array of objects', () => {
    const persons = [
      { name: 'Joao', age: 24 },
      { name: 'Paulo', age: 54 },
    ];
    const hasJoao = has('Joao');
    expect(hasJoao(persons)).toBeTruthy();
  });
});
