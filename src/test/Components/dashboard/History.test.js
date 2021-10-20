import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import History from '../../../components/dashboard/History';

describe('History component', () => {
  const mockStore = configureStore([thunk]);

  describe('Before fetching histories from the server', () => {
    const store = mockStore({
      versionToBeDisplayedReducer: {
        id: 2,
      },
      getMatricesHistoryReducer: {
        matrices: [],
        skill_level_options: [],
        isLoading: true,
      },
    });

    it('should render the SkeletonTable component', () => {
      const wrapper = mount(
        <Provider store={store}><History /></Provider>,
      );
      expect(wrapper.find('SkeletonTable')).toHaveLength(1);
    });
  });

  describe('After fetching histories from the server', () => {
    const store = mockStore({
      versionToBeDisplayedReducer: {
        id: 2,
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
        skill_level_options: [{ id: '1', display: '' }],
        isLoading: false,
      },
    });

    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}><History /></Provider>,
      );
    });

    it('should renders two matrix versions', () => {
      expect(wrapper.find('Version')).toHaveLength(2);
    });

    it('has a MatrixTable component', () => {
      expect(wrapper.find('MatrixTable')).toHaveLength(1);
    });
  });
});
