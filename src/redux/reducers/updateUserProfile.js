const initialState = {
  profileUpdates: {},
};

const updateUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_USER_PROFILE':
    return {
      ...state,
      profileUpdates: { ...state.profileUpdates, ...action.payload },
    };
  default:
    return state;
  }
};

export default updateUserProfileReducer;
