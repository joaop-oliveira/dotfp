import { tryCatch } from '../../try';

const prom = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('Im late');
    }, 1000);
  });

const mockRight = jest.fn((value: string[]) => value[0]);
const mockLeft = jest.fn((error) => error);

beforeEach(() => {
  mockLeft.mockClear();
  mockRight.mockClear();
});

describe('tryCatch', () => {
  it('should call Right', () => {
    tryCatch(async () => await prom()).fold(console.log, console.log);
  });
});
