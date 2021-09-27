import updateMatrixReducer from '../../redux/reducers/updateMatrix';

describe(updateMatrixReducer, () => {
  const initialState = {
    matrix: {
      data: [{
        id: '1',
        theme: {
        },
        skills_level: 1,
      }],
      skill_level_options: [{ id: 1, display: '1' }],
    },
    message: '',
    errors: null,
    isLoading: false,
  };

  it('returns initialState', () => {
    expect(updateMatrixReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the updated successfully message', () => {
    const action = {
      type: 'UPDATE_DATABASE_MATRIX_SUCCESS',
      payload: {
        message: 'Updated successfully',
      },
    };
    expect(updateMatrixReducer(undefined, action).message).toEqual('Updated successfully');
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
      errors: null,
      isLoading: false,
    };
    const updateAction = {
      type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
      payload: {
        id: 1,
        skills_level: 2,
      },
    };
    expect(updateMatrixReducer(currentState, updateAction)).toEqual({
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
      errors: null,
      isLoading: false,
    });
  });
});
