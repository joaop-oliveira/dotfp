import { Box } from '../../box';

describe('Box', () => {
  it('should map an number', () => {
    const box = Box(2).map((x) => x + 2);
    expect(box.toString).toBe('Box(4)');
  });
  it('should chain a string', () => {
    const box = Box('hello').chain((hello) => hello + ' world');
    expect(box).toBe('hello world');
  });
  it('should fold a string', () => {
    const box = Box('hello').fold((hello) => hello + ' world');
    expect(box).toBe('hello world');
  });
});
