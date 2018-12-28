//testing utility functions for testing
import casual from 'casual';
casual.seed(777);
import {
  fakeItem,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem, } from '../lib/testUtils';

const testItem = () => ({
  __typename: 'Item',
  id: 'abc123',
  price: 5000,
  user: null,
  image: 'dog-small.jpg',
  title: 'dogs are best',
  description: 'dogs',
  largeImage: 'dog.jpg',
});

const testUser = () => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
});

const testOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: `${casual.word}.jpg`,
  title: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const testOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2018-04 - 06T19: 24: 16.000Z',
  user: fakeUser(),
});

const testCartItem = overRides => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  item: fakeItem(),
  user: fakeUser(),
  ...overRides,
});

describe('fakeItem', () => {
  it('equals the testItem', () => {
    expect(fakeItem().toString()).toMatch(testItem().toString());
  })
});

describe('fakeUser', () => {
  it('equals the testUser', () => {
    expect(fakeUser().toString()).toMatch(testUser().toString());
  })
});

describe('fakeOrderItem', () => {
  it('equals the testOrderItem', () => {
    expect(fakeOrderItem().toString()).toMatch(testOrderItem().toString());
  })
});

describe('fakeOrder', () => {
  it('equals the testOrder', () => {
    expect(fakeOrder().toString()).toMatch(testOrder().toString());
  })
});

describe('fakeCartItem', () => {
  it('equals the testCartItem', () => {
    expect(fakeCartItem().toString()).toMatch(testCartItem().toString());
  })
});
