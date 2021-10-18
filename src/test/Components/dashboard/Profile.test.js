import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../../../components/dashboard/account/Profile';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

describe(Profile, () => {
  const mockStore = configureStore([thunk]);
  let wrapper; let store;

  beforeEach(() => {
    store = mockStore({
      currentUserProfileReducer: {
        profile: { first_name: 'David', last_name: 'Manzi', email: '' },
      },
    });
    wrapper = mount(<Provider store={store}><Profile /></Provider>);
  });

  it('updates the the profile attribute', () => {
    const textField = wrapper.find({ label: 'first_name' });
    textField.props().onChange({ target: { value: 'Davidson' } });
    expect(store.getActions()).toEqual([{
      type: 'UPDATE_USER_PROFILE',
      payload: { first_name: 'Davidson' },
    }]);
  });
});
