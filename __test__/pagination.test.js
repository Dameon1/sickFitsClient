import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Pagination, { PAGINATION_QUERY } from '../components/Pagination';
import { MockedProvider } from 'react-apollo/test-utils';

function makeMockFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY, variables: { skip: 0, first: 4 }},
      result: {
        data: {
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              __typename: 'count',
              count: length,
            }
          }
        }
      }
    }
  ];
};

describe('<Pagination />', () => {
  it('displays a loading message', () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMockFor(1)}>
        <Pagination page={1} />
      </MockedProvider>
    )
    expect(1).toBe(1);
    console.log(wrapper.debug());
  })
})

