import snackbarReducer from '../../redux/reducers/snackbar';

describe(snackbarReducer, () => {
  const initialState = {
    snackbarOpen: false,
    snackbarType: 'success',
    snackbarMessage: 'successfully did something right',
  };

  it('should return initialState', () => {
    expect(snackbarReducer(undefined, {})).toEqual(initialState);
  });

  it('returns newstate on SET_SNACKBAR action', () => {
    const action = {
      type: 'SET_SNACKBAR',
      payload: {
        snackbarOpen: true,
        snackbarType: 'error',
        snackbarMessage: 'Some kind of error',
      },
    };
    expect(snackbarReducer(undefined, action)).toEqual({
      snackbarOpen: true,
      snackbarType: 'error',
      snackbarMessage: 'Some kind of error',
    });
  });
});
