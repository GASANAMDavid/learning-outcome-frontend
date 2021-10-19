import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Users from '../../../components/dashboard/user-management/users';
import UserRow from '../../../components/dashboard/user-management/userRow';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

describe(Users, () => {
  const mockStore = configureStore([thunk]);
  let wrapper;
  const store = mockStore({
    usersListReducer: {
      users: [{
        id: 1,
        first_name: 'Johnson',
        last_name: 'Doe',
        email: 'johnson@doe.com',
        role: { id: 1, name: 'apprentice' },
      }, {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane12@doe.com',
        role: { id: 2, name: 'admin' },
      }],
    },
  });
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><Users /></Provider>);
  });

  it('should render a given number of users', () => {
    expect(wrapper.find(UserRow)).toHaveLength(2);
  });
});
