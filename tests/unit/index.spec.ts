import { sum } from '@/index';

describe('test', () => {
  it('sum method', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
