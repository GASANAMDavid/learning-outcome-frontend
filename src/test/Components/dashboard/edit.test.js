import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Edit from '../../../components/dashboard/user-management/edit';
import UserInfo from '../../../components/dashboard/user-management/userInfo';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    state: { user: { role: { id: '' } } },
  }),
}));

const mockStore = configureStore([thunk]);

describe(Edit, () => {
  it('renders the UserInfo component', () => {
    const store = mockStore({
      rolesReducer: { roles: [{ id: '' }] },
    });
    const wrapper = mount(<Provider store={store}><Edit /></Provider>);

    expect(wrapper.find(UserInfo)).toHaveLength(1);
  });
});
