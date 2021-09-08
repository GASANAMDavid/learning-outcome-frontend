const initialState = {
  matrix: {
    data: [{
      id: '',
      theme: {
      },
    }],
    skill_level_options: [{}],
  },
  errors: '',
};

const getCurrentMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CURRENT_MATRIX_SUCCESS':
    return {
      ...state,
      matrix: action.payload.matrix,
    };

  default:
    return state;
  }
};

export default getCurrentMatrixReducer;
