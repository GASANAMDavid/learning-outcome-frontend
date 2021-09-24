const initialState = {
  versionId: 1,
};

const setVersionIdToBeDisplayedReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_VERSION_ID_TO_BE_DISPLAYED':
    return {
      ...state,
      versionId: action.payload,
    };
  default:
    return state;
  }
};

export default setVersionIdToBeDisplayedReducer;
