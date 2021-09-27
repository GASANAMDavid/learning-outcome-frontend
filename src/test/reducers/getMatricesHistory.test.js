import getMatricesHistoryReducer from '../../redux/reducers/getMatricesHistory';

describe(getMatricesHistoryReducer, () => {
  const initialState = {
    matrices: [
      {
        id: 1,
        data: [{ id: 1, theme: { title: '' }, skills_level: 1 }],
        updated_at: 16789245,
      },
    ],
    skill_level_options: [{ id: 1, display: '1' }],
    isLoading: false,
  };

  const action = {
    type: 'GET_HISTORY_SUCCESS',
    payload: {
      matrices: [
        {
          id: 1,
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

          updated_at: 12345,
        },
      ],
      skill_level_options: [{ id: 1, display: '1' }],
    },
  };
  it('should return initialState', () => {
    expect(getMatricesHistoryReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the history of matrices', () => {
    expect(getMatricesHistoryReducer(undefined, action)).toEqual({
      matrices: [
        {
          id: 1,
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

          updated_at: 12345,
        },
      ],
      skill_level_options: [{ id: 1, display: '1' }],
      isLoading: false,
    });
  });
});
