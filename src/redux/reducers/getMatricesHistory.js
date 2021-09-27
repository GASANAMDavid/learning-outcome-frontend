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

const getMatricesHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_MATRICES_HISTORY_START':
    return {
      ...state,
      isLoading: true,
    };
  case 'GET_HISTORY_SUCCESS':
    return {
      ...state,
      matrices: action.payload.matrices,
      skill_level_options: action.payload.skill_level_options,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default getMatricesHistoryReducer;
