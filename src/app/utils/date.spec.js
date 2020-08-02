import { getYear } from './date';

describe('test date utils', () => {
  it('should return year', () => {
    expect(getYear('2020-04-04')).toEqual('2020');
  });

  it('should return empty string if no argument', () => {
    expect(getYear()).toEqual('');
  });
});
