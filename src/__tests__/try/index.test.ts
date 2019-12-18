import { Try } from '../../try';
import { logIt } from '../../debug';
import _ from 'lodash';
import { Right } from '../../either/right';

const right = jest.fn((value) => value);
const left = jest.fn((error) => error);

const hugeData = _.range(100000).map((number) => ({
  square: number * number,
  even: number % 2 === 0,
  double: number * 2,
  triple: number * 3,
}));

beforeEach(() => {
  left.mockClear();
  right.mockClear();
});

describe('Try', () => {
  describe('catch', () => {
    it('should call Right', () => {
      Try.catch(() => 'hello').fold(left, right);
      expect(right).toHaveBeenCalled();
    });
    it('should call Left', () => {
      Try.catch(() => {
        throw new Error('Ooops');
      }).fold(left, right);
      expect(left).toHaveBeenCalled();
    });
  });

  describe('parseNumber', () => {
    it('should call Right', () => {
      Try.parseNumber('10,50').fold(left, right);
      expect(right).toHaveBeenCalled();
    });
    it('should call Left', () => {
      Try.parseNumber('@#$$%')
        .map(logIt)
        .fold(left, right);
      expect(left).toHaveBeenCalled();
    });
  });
});

describe('copmpress', () => {
  it('should compress huge object', async () => {
    const compressed = await Try.gzip(hugeData);
    compressed.fold(left, right);
    expect(right).toHaveBeenCalled();
  });
  it('should gunzip huge buffer', async () => {
    const compressed = await Try.gzip(hugeData);
    const buff = compressed.chain((buff) => buff);
    const uncompressed = await Try.gunzip(buff);
    uncompressed.fold(left, right);
    expect(right).toHaveBeenCalled();
  });
});
