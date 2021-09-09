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
  newUpdates: false,
};

const getCurrentMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CURRENT_MATRIX_SUCCESS':
    return {
      ...state,
      matrix: action.payload.matrix,
    };
  case 'UPDATE_LOCAL_MATRIX_SUCCESS':
    return {
      ...state,
      matrix: {
        ...state.matrix,
        data: state.matrix.data.map((skill) => {
          if (skill.id === action.payload.id) {
            return { ...skill, skills_level: action.payload.skills_level };
          }
          return skill;
        }),
      },

    };
  case 'SET_NEW_UPDATE_FLAG':
    return {
      ...state,
      newUpdates: action.payload,
    };
  default:
    return state;
  }
};

export default getCurrentMatrixReducer;
