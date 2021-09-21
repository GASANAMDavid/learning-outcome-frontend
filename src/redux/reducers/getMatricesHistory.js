const initialState = {
  matrices: [{
    data: [],
    updated_at: '',
  }],
};
const getMatricesHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_HISTORY_SUCCESS':
    return {
      ...state,
      matrices: action.payload.matrices,
    };
  default:
    return state;
  }
};

export default getMatricesHistoryReducer;
