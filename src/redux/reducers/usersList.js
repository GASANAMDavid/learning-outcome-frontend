const initialState = {
  isLoading: false,
  users: [{
    id: 1,
    first_name: '',
    last_name: '',
    email: '',
    role: { id: 1, name: '' },
  }],
};

const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_USERS_START':
    return {
      ...state,
      isLoading: true,
    };
  case 'GET_USERS_SUCCESS':
    return {
      ...state,
      users: action.payload.users,
    };
  default:
    return state;
  }
};

export default usersListReducer;
