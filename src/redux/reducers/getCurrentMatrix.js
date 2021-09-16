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
};

const getCurrentMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CURRENT_MATRIX_SUCCESS':
    return {
      ...state,
      matrix: action.payload.matrix,
    };
  case 'UPDATE_ORIGINAL_MATRIX':
    return {
      ...state,
      matrix: action.payload,
    };
  default:
    return state;
  }
};

export default getCurrentMatrixReducer;
