import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import Header from '../components/Header';
import { fakeUser, fakeCartItem } from '../lib/testUtils';

describe('<Header/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mount(
      <MockedProvider>
        <Header />
      </MockedProvider>
    );
    expect(toJSON(wrapper.find('div[className="bar"]'))).toMatchSnapshot();
  })
})