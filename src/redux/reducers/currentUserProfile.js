const initialState = {
  isLoading: false,
  profile: {
    first_name: '', last_name: '', email: '', role: { id: '', admin: true },
  },
};
const currentUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CURRENT_USER_SUCCESS':
    return {
      ...state,
      profile: action.payload.user,
      isLoading: false,
    };
  case 'UPDATE_USER_PROFILE':
    return {
      ...state,
      profile: {
        ...state.profile,
        ...action.payload,
      },
    };
  default:
    return state;
  }
};

export default currentUserProfileReducer;
