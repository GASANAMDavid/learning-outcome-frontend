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
    setVersionIdToBeDisplayedReducer: {
      versionId: 2,
    },
    getMatricesHistoryReducer: {
      matrices: [{
        id: 1,
        data: [],
        updated_at: 1632228060,
      },
      {
        id: 2,
        data: [],
        updated_at: 1632400860,
      },
      ],
      skill_level_options: [{ id: 1, display: '1' }],
    },
  });

  it('should renders two matrix versions', () => {
    wrapper = mount(
      <Provider store={store}><History /></Provider>,
    );
    expect(wrapper.find('Version')).toHaveLength(2);
  });
});
