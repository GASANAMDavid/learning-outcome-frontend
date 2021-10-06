import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from '../../../components/home/Home';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

describe(Home, () => {
  const mockStore = configureMockStore([thunk]);
  it('renders correctly', () => {
    const store = mockStore({
      createUserReducer: {
        user: {
          email: '', password: '', first_name: '', last_name: '',
        },
      },
    });
    shallow(<Provider store={store}><Home /></Provider>);
  });
});
