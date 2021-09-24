import getCurrentMatrixreducer from '../../redux/reducers/getCurrentMatrix';

describe('getCurrentMatrix reducer', () => {
  const initialState = {
    matrix: {
      data: [{
        id: '',
        theme: {
        },
      }],
      skill_level_options: [],
    },
    errors: '',
  };
  const action = {
    type: 'GET_CURRENT_MATRIX_SUCCESS',
    payload: {
      matrix: {
        data: [{
          id: '1',
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
    expect(getCurrentMatrixreducer(undefined, {})).toEqual(initialState);
  });

  it('returns the current outcome matrix state on success', () => {
    expect(getCurrentMatrixreducer(undefined, action)).toEqual({
      matrix: {
        data: [{
          id: '1',
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
    });
  });
});
