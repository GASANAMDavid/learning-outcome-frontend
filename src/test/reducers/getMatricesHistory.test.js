import getMatricesHistoryReducer from '../../redux/reducers/getMatricesHistory';

describe(getMatricesHistoryReducer, () => {
  const initialState = {
    matrices: [{
      data: [],
      updated_at: '',
    }],
  };

  const action = {
    type: 'GET_HISTORY_SUCCESS',
    payload: {
      matrices: [
        {
          matrix: [{
            id: 1,
            learning_outcome: 'Testing redux',
            skills_level: 1,
            theme: {
              title: 'Automated testing',
              link: 'https://github.com/abcd',
            },
            apprenticeship_level: 1,
          }],

          updated_at: '',
        },
      ],
    },
  };
  it('should return initialState', () => {
    expect(getMatricesHistoryReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the history of matrices', () => {
    expect(getMatricesHistoryReducer(undefined, action)).toEqual({
      matrices: [
        {
          matrix: [{
            id: 1,
            learning_outcome: 'Testing redux',
            skills_level: 1,
            theme: {
              title: 'Automated testing',
              link: 'https://github.com/abcd',
            },
            apprenticeship_level: 1,
          }],

          updated_at: '',
        },
      ],
    });
  });
});
