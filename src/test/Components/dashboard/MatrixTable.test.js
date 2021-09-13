import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import MatrixTable from '../../../components/dashboard/MatrixTable';

describe(MatrixTable, () => {
  const mockStore = configureStore([thunk]);
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
        },
        {
          id: 2,
          learning_outcome: 'Three Rules of TDD',
          skills_level: '1',
          theme: {
            title: 'Automated Testing',
            link: 'https://github.com/abc123',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options: [{ id: '1', display: '' }],
      },
      errors: '',
    },
  });

  it('renders correctly', () => {
    shallow(
      <Provider store={store}>
        <MatrixTable />
      </Provider>,
    );
  });

  it('renders a given number of SkillRow components', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const wrapper = mount(<Provider store={store}><MatrixTable /></Provider>);
    expect(wrapper.find('SkillRow')).toHaveLength(2);
    useDispatchSpy.mockClear();
  });
});
