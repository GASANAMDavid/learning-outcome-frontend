const initialState = {
  matrix: {},
  errors: '',
};

const getCurrentMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CURRENT_MATRIX_SUCCESS':
    return {
      ...state,
      matrix: action.payload,
    };

  default:
    return state;
  }
};

export default getCurrentMatrixReducer;
