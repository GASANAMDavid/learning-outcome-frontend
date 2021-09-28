import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Fab from '@material-ui/core/Fab';
import Version from '../../../components/dashboard/Version';

describe(Version, () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});

  it('dispatches an action to set version id to be displayed', () => {
    const wrapper = mount(<Provider store={store}><Version /></Provider>);
    wrapper.find(Fab).simulate('click');
    const expectedActions = [{
      type: 'SET_VERSION_ID_TO_BE_DISPLAYED',
      payload: 1,
    }];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
