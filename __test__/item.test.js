import ItemComponent from '../components/Item';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 4000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg',
};

describe('<Item/>', () => {
  it('displays image properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    const img = wrapper.find('img');
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
    //console.log(img.debug());
  })
  it('renders and displays properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    const PriceTag = wrapper.find('PriceTag');
    expect(PriceTag.children().text()).toBe('$40');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    //console.log(wrapper.debug());    
  });
  it('renders out the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    const buttonList = wrapper.find('.buttonList');
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find('Link').exists()).toBe(true);
    expect(buttonList.find('AddToCart').exists()).toBe(true);;
    expect(buttonList.find('DeleteItem').exists()).toBe(true);;
    //console.log(buttonList.debug());
  });
});