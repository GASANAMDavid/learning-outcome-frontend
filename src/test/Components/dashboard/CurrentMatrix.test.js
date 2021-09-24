import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import CurrentMatrix from '../../../components/dashboard/CurrentMatrix';

describe(CurrentMatrix, () => {
  const mockStore = configureStore([thunk]);
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  let wrapper;
  const store = mockStore({
    getCurrentMatrixReducer: {
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'The Four-Phase Test',
          skills_level: '1',
          theme: {
            title: 'Automated Testing',
            link: 'https://github.com/abc',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options: [{ id: '1', display: '' }, { id: '2', display: '' }],
      },
    },
    updateMatrixReducer: {
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'The Four-Phase Test',
          skills_level: '1',
          theme: {
            title: 'Automated Testing',
            link: 'https://github.com/abc',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options: [{ id: '1', display: '' }, { id: '2', display: '' }],
      },
    },
  });

  beforeEach(() => {
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    wrapper = mount(<Provider store={store}><CurrentMatrix /></Provider>);
  });

  afterEach(() => {
    useDispatchSpy.mockClear();
  });

  describe('update button', () => {
    it('disabled when there are no new local updates', () => {
      expect(wrapper.find({ 'data-testid': 'update-btn' }).first().prop('disabled')).toEqual(true);
    });
    it('exists when there are new local updates in the matrix store', () => {
      const updatedStore = mockStore({
        getCurrentMatrixReducer: {
          matrix: {
            data: [{
              id: 1,
              learning_outcome: 'The Four-Phase Test',
              skills_level: '1',
              theme: {
                title: 'Automated Testing',
                link: 'https://github.com/abc',
              },
              apprenticeship_level: 1,
            }],
            skill_level_options: [{ id: '1', display: '' }],
          },
        },
        updateMatrixReducer: {
          matrix: {
            data: [{
              id: 1,
              learning_outcome: 'The Four-Phase Test',
              skills_level: '2',
              theme: {
                title: 'Automated Testing',
                link: 'https://github.com/abc',
              },
              apprenticeship_level: 1,
            }],
            skill_level_options: [{ id: '1', display: '' }, { id: '2', display: '' }],
          },
          newUpdates: true,
        },
      });
      wrapper = mount(<Provider store={updatedStore}><CurrentMatrix /></Provider>);
      expect(wrapper.find({ 'data-testid': 'update-btn' }).first().prop('disabled')).toEqual(false);
    });
  });
});