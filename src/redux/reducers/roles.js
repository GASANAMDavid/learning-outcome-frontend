const initialState = {
  roles: [{ id: '', name: '' }],
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_ROLES_SUCCESS':
    return {
      ...state,
      roles: action.payload.roles,
    };
  default: return state;
  }
};

export default rolesReducer;
