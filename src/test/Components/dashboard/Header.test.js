import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import Header from '../../../components/dashboard/Header';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

const mockStore = configureStore([thunk]);

describe(Header, () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  const store = mockStore({
    currentUserProfileReducer: {
      profile: {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'doe@example.com',
        role_id: 1,
      },
    },
  });

  beforeEach(() => {
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
  });

  afterEach(() => {
    useDispatchSpy.mockClear();
  });

  it('renders the dropdown component', () => {
    const wrapper = mount(<Provider store={store}><Header /></Provider>);
    expect(wrapper.find('Dropdown')).toHaveLength(1);
  });
});
