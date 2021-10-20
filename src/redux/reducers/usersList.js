const initialState = {
  isLoading: false,
  users: [{
    id: 1,
    first_name: '',
    last_name: '',
    email: '',
    role: { id: '', name: '' },
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
  case 'REMOVE_USER_FROM_LIST':
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.payload),
    };
  default:
    return state;
  }
};

export default usersListReducer;
