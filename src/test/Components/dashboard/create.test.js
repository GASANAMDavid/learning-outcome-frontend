import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Create from '../../../components/dashboard/user-management/create';
import UserInfo from '../../../components/dashboard/user-management/userInfo';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

const mockStore = configureStore([thunk]);

describe(Create, () => {
  it('renders the UserInfo component', () => {
    const store = mockStore({
      createUserReducer: {
        user: { role: { id: '' } },
      },
      rolesReducer: { roles: [{ id: '' }] },
    });
    const wrapper = mount(<Provider store={store}><Create /></Provider>);

    expect(wrapper.find(UserInfo)).toHaveLength(1);
  });
});
