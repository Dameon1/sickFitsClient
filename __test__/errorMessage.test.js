import DisplayError from '../components/ErrorMessage';
import {  mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';

describe('<DisplayError/>', () => {
  it('displays the error message given', async () => {
    const wrapper = mount(
       <DisplayError error={{error:'simple error message'}} />
       );
    await wait();
    wrapper.update(); 
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
});