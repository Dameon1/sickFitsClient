import calcTotalPrice from '../lib/calcTotalPrice';
import {fakeCartItem} from '../lib/testUtils';

describe('calculates total price', () => {
  it('returns zero with no cart item', () => {
    expect(calcTotalPrice([])).toEqual(0);
  })
})

describe('calculates total price', () => {
  it('returns correct amount with 3 items priced at 5000', () => {
    expect(calcTotalPrice([fakeCartItem()])).toEqual(15000);
  })
})