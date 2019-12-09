import { Try } from '../../try';
import { logIt } from '../../debug';

const prom = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('Im late');
    }, 1000);
  });

const right = jest.fn((value: string[]) => value[0]);
const left = jest.fn((error) => error);

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
