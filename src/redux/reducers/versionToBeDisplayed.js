const initialState = {
  id: 1,
};

const versionToBeDisplayedReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_VERSION_ID_TO_BE_DISPLAYED':
    return {
      ...state,
      id: action.payload,
    };
  default:
    return state;
  }
};

export default versionToBeDisplayedReducer;
