import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Dashboard from '../components/dashboard/Dashboard';
import App from '../App';

describe('App', () => {
  const state = {
    getCurrentMatrixReducer: {
      matrix: {
        data: [{
          id: '1',
          skills_level: '1',
          theme: {},
        }],
        skill_level_options: [{ id: '1', display: '' }],
        errors: '',
      },
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(state);

  it('renders dashboard component for /dashboard path', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
        ,
      </Provider>,
    );
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
});
