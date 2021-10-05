import { getItem } from '../../helpers/localStorage';

const initialState = {
  user: { authenticated: getItem('accessToken') !== null },
  isLoading: false,
};
const getUserReducer = () => (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
};

export default getUserReducer;
