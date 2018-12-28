import formatMoney from '../lib/formatMoney';

describe('formatMoney Function', () => {
  it('returns a string', () => {
    expect(formatMoney(1)).toEqual(expect.stringContaining(''));
    expect(formatMoney(1)).toEqual(expect.stringContaining('$'));
  });

  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(98)).toEqual('$0.98');
  });

  it('leaves the cents off of whole dollars', () => {
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(65000)).toEqual('$650');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });

  it('works with whole and fractional dollars', () => {
    expect(formatMoney(123)).toEqual('$1.23');
    expect(formatMoney(123456789)).toEqual('$1,234,567.89');
  });
});