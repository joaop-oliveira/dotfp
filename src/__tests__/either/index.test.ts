import { Either } from '../../either';

const right = jest.fn((value) => value);
const left = jest.fn((error) => error);

beforeEach(() => {
  left.mockClear();
  right.mockClear();
});

describe('Either', () => {
  describe('fromNullable', () => {
    it('should call left', () => {
      Either.fromNullable(null).fold(left, right);
      expect(left).toHaveBeenCalled();
    });
    it('should call right', () => {
      Either.fromNullable(2).fold(left, right);
      expect(right).toHaveBeenCalled();
    });
    it('should be mappable', () => {
      Either.fromNullable(2)
        .map((x) => x.toString())
        .fold(left, right);
      expect(right).toHaveBeenCalledWith('2');
    });
  });
  describe('fromEmpty', () => {
    it('should call left', () => {
      Either.fromEmpty([]).fold(left, right);
      expect(left).toHaveBeenCalled();
    });
    it('should call right', () => {
      Either.fromEmpty([2]).fold(left, right);
      expect(right).toHaveBeenCalled();
    });
    it('should be mappable', () => {
      Either.fromEmpty([2])
        .map((x) => x[0].toString())
        .fold(left, right);
      expect(right).toHaveBeenCalledWith('2');
    });
  });
  describe('fromNan', () => {
    it('should call left', () => {
      Either.fromNan('@!!@#').fold(left, right);
      expect(left).toHaveBeenCalled();
    });
    it('should call right', () => {
      Either.fromNan('10.50').fold(left, right);
      expect(right).toHaveBeenCalled();
    });
    it('should be mappable', () => {
      Either.fromNan('10.50')
        .map((x) => x.toFixed(2))
        .fold(left, right);
      expect(right).toHaveBeenCalledWith('10.50');
    });
  });
});

describe('fromObject', () => {
  it('should call right', () => {
    const person = { name: 'John', age: 24 };
    Either.fromObject(person).fold(left, right);
    expect(right).toHaveBeenCalled();
  });
  it('should call left', () => {
    const person = 'person';
    Either.fromObject(person).fold(left, right);
    expect(left).toHaveBeenCalled();
  });
});
