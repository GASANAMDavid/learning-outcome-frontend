import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Version from '../../../components/dashboard/Version';

describe(Version, () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  it('renders correctly', () => {
    shallow(<Provider store={store}><Version /></Provider>);
  });
});
