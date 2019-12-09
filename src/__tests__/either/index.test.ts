import { Either } from '../../either';

const right = jest.fn((value: string[]) => value[0]);
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
  });
});
