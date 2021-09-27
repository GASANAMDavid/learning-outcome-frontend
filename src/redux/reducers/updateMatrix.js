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
  errors: null,
  message: '',
  isLoading: false,
};

const updateMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'MAKE_LOCAL_MATRIX_COPY':
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
  case 'UPDATE_DATABASE_MATRIX_SUCCESS':
    return {
      ...state,
      message: action.payload.message,
    };
  default:
    return state;
  }
};

export default updateMatrixReducer;
