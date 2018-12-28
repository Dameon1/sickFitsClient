import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import CartItem from '../components/CartItem';
import { fakeCartItem } from '../lib/testUtils';
import { mount } from 'enzyme';

const fakeItem = fakeCartItem();

describe('<CartItem/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
        <MockedProvider >
          <CartItem cartItem={fakeItem}/>
        </MockedProvider>
      );
       await wait();
       wrapper.update();
       expect(toJSON(wrapper.find('CartItem'))).toMatchSnapshot();
       expect(wrapper.find('CartItem')).toHaveLength(1);
      });
});