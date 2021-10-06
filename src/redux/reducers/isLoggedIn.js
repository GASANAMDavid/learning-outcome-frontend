import { getItem } from '../../helpers/localStorage';

const initialState = {
  user: {
    authenticated: getItem('accessToken') !== null,
  },
};

const isLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      user: { authenticated: true },
    };
  case 'LOGOUT':
    return {
      ...state,
      user: { authenticated: false },
    };
  default:
    return state;
  }
};

export default isLoggedInReducer;
