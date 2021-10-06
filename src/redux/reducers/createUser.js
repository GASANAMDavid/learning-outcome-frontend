const initialState = {
  user: {},
};

const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CREATE_USER_START':
    return {
      ...state,
      isLoading: true,
    };
  case 'ADD_USER_INFO':
    return {
      ...state,
      user: { ...state.user, ...action.payload },
    };

  default:
    return state;
  }
};

export default createUserReducer;
