'use strict';

function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function () {
 return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(this.foods), 2000);
  })};

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
  });

  it('can create a person', () => {
    const me = new Person('Myself', ['pizza','burgs']);
    expect(me.name).toBe('Myself');
  });

  it('cant fetch foods', async () => {
    const me = new Person('Myself', ['pizza','burgs']);
    me.fetchFavFoods = jest.fn().mockResolvedValue(['suxhi','pizza'])
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain('pizza');
  })
})
