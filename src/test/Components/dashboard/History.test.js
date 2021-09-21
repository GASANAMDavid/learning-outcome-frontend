import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import History from '../../../components/dashboard/History';

describe(History, () => {
  const mockStore = configureStore([thunk]);
  let wrapper;
  const store = mockStore({
    getMatricesHistoryReducer: {
      matrices: [{
        data: [],
        updated_at: '2021-09-20 06:53:42 UTC',
      },
      {
        data: [],
        updated_at: '2021-09-20 09:34:09 UTC',
      },
      ],
    },
  });

  it('should renders two matrix versions', () => {
    wrapper = mount(
      <Provider store={store}><History /></Provider>,
    );
    expect(wrapper.find('Version')).toHaveLength(2);
  });
});
