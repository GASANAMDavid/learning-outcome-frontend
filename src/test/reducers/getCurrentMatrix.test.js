import getCurrentMatrixReducer from '../../redux/reducers/getCurrentMatrix';

describe(getCurrentMatrixReducer, () => {
  const initialState = {
    matrix: {
      data: [{
        id: '1',
        skills_level: 1,
        theme: {
        },
      }],
      skill_level_options: [{ id: 1, display: '1' }],
    },
    errors: '',
    newUpdates: false,
  };
  const action = {
    type: 'GET_CURRENT_MATRIX_SUCCESS',
    payload: {
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'Tessing redux',
          skills_level: 1,
          theme: {
            title: 'Automated testing',
            link: 'https://github.com/abcd',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options:
          [{
            id: 1,
            description: 'Default',
            color: 'white',
          }],
      },
    },
  };
  it('should return initialState', () => {
    expect(getCurrentMatrixReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the current outcome matrix state on success', () => {
    expect(getCurrentMatrixReducer(undefined, action)).toEqual({
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'Tessing redux',
          skills_level: 1,
          theme: {
            title: 'Automated testing',
            link: 'https://github.com/abcd',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options:
            [{
              id: 1,
              description: 'Default',
              color: 'white',
            }],
      },
      errors: '',
      newUpdates: false,
    });
  });

  it('updates the current outcome matrix state', () => {
    const currentState = {
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'Testing redux',
          skills_level: 1,
          theme: {
            title: 'Automated testing',
            link: 'https://github.com/abcd',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options:
          [{
            id: 1,
            description: 'Default',
            color: 'white',
          }],
      },
      errors: '',
      newUpdates: false,
    };
    const updateAction = {
      type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
      payload: {
        id: 1,
        skills_level: 2,
      },
    };
    expect(getCurrentMatrixReducer(currentState, updateAction)).toEqual({
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'Testing redux',
          skills_level: 2,
          theme: {
            title: 'Automated testing',
            link: 'https://github.com/abcd',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options:
          [{
            id: 1,
            description: 'Default',
            color: 'white',
          }],
      },
      errors: '',
      newUpdates: false,
    });
  });

  it('sets new updates flag to true', () => {
    const setUpdateFlagAction = {
      type: 'SET_NEW_UPDATE_FLAG',
      payload: true,
    };
    const state = getCurrentMatrixReducer(initialState, setUpdateFlagAction);
    expect(state.newUpdates).toBe(true);
  });
});
