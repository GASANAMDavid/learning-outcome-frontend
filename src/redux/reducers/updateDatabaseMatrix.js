const initialState = {
  message: '',
  error: '',
};

const updateDatabaseMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_DATABASE_MATRIX_SUCCESS':
    return {
      ...state,
      message: action.payload.message,
    };
  default:
    return state;
  }
};

export default updateDatabaseMatrixReducer;
