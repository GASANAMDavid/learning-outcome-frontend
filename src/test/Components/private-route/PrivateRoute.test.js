import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Redirect, MemoryRouter } from 'react-router-dom';

import PrivateRoute from '../../../components/private-route/PrivateRoute';

describe(PrivateRoute, () => {
  describe('when is not logged in', () => {
    it('redirects to home page', () => {
      const mockStore = configureMockStore([thunk]);
      const state = {
        isLoggedInReducer: {
          user: {
            authenticated: false,
          },
        },
      };
      const store = mockStore(state);
      const children = () => { };
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dashboard/current_matrix']}>
            <PrivateRoute path="/dashboard/current_matrix">
              {children}
            </PrivateRoute>
          </MemoryRouter>
        </Provider>,
      );

      expect(wrapper.find(Redirect)).toHaveLength(1);
    });
  });

  describe('when is logged in', () => {
    it('renders children', () => {
      const mockStore = configureMockStore([thunk]);
      const state = {
        isLoggedInReducer: {
          user: {
            authenticated: true,
          },
        },
      };
      const store = mockStore(state);
      const Dashboard = () => (<h1>Child</h1>);
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dashboard/current_matrix']}>
            <PrivateRoute path="/dashboard/current_matrix">
              <Dashboard />
            </PrivateRoute>
          </MemoryRouter>
        </Provider>,
      );

      expect(wrapper.find(Dashboard)).toHaveLength(1);
    });
  });
});
