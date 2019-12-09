import { Left, Right } from '../../either';
import { fromItemInArray } from '../../from';

interface Person {
  name: string;
  age: number;
}

const mockRight = jest.fn((value: string[]) => value[0]);
const mockLeft = jest.fn((error) => error);

beforeEach(() => {
  mockLeft.mockClear();
  mockRight.mockClear();
});

describe('fromItemInArray', () => {
  it('should return Right', () => {
    const person = [{ age: 24, name: 'Joao' }];
    fromItemInArray(person, 'name').fold(mockLeft, mockRight);
    expect(mockRight).toHaveBeenCalled();
  });
  it('should return Left', () => {
    const person = [];
    fromItemInArray(person, 'name').fold(mockLeft, mockRight);
    expect(mockLeft).toHaveBeenCalled();
  });
});
