import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Account from '../../../components/dashboard/user-management/account';
import UserInfo from '../../../components/dashboard/user-management/userInfo';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

describe(Account, () => {
  const mockStore = configureStore([thunk]);
  let wrapper; let store;

  beforeEach(() => {
    store = mockStore({
      currentUserProfileReducer: {
        profile: {
          first_name: 'David', last_name: 'Manzi', email: '', role: { id: 1, admin: false },
        },
      },
      rolesReducer: {
        roles: [{ name: 'admin', id: 1 }],
      },
    });
    wrapper = mount(<Provider store={store}><Account /></Provider>);
  });

  it('renders the UserInfo component', () => {
    expect(wrapper.find(UserInfo)).toHaveLength(1);
  });
});
