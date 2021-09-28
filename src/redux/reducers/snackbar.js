const initialState = {
  snackbarOpen: false,
  snackbarType: 'success',
  snackbarMessage: 'successfully did something right',
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_SNACKBAR':
    return {
      ...state,
      snackbarOpen: action.payload.snackbarOpen,
      snackbarMessage: action.payload.snackbarMessage,
      snackbarType: action.payload.snackbarType,
    };
  default:
    return state;
  }
};

export default snackbarReducer;
