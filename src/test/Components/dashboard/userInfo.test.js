import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserInfo from '../../../components/dashboard/user-management/userInfo';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

const mockStore = configureStore([thunk]);

const mockHistory = { push: jest.fn() };
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => mockHistory,
}));

describe(UserInfo, () => {
  let wrapper;
  const mockProfile = { role: { id: '' } };
  const mockHandleChange = jest.fn();
  const mockHandleSelectRole = jest.fn();
  const mockHandleSave = jest.fn();
  let store;
  beforeEach(() => {
    store = mockStore({
      rolesReducer: { roles: [{ id: '' }, { id: '' }] },
    });
    wrapper = mount(
      <Provider store={store}>
        <UserInfo
          profile={mockProfile}
          onSelectedRoleChange={mockHandleSelectRole}
          onChange={mockHandleChange}
          onSave={mockHandleSave}
        />
      </Provider>,
    );
  });

  it('should change the users first name', () => {
    const firstNameField = wrapper.find({ label: 'First Name' });
    firstNameField.simulate('change', { target: { value: 'David' } });
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('allows user to select a role', () => {
    const selectField = wrapper.find({ label: 'Role' }).first();
    selectField.props().onChange({ target: { value: '' } });
    expect(mockHandleSelectRole).toHaveBeenCalled();
  });

  it('allows to save changes', () => {
    const saveBtn = wrapper.find('#save').first();
    saveBtn.simulate('click');
    expect(mockHandleSave).toHaveBeenCalled();
  });

  it('allows user to change path', () => {
    const backBtn = wrapper.find('#back').first();
    backBtn.simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
  });
});
