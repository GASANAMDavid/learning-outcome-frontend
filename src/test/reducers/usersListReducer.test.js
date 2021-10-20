import usersListReducer from '../../redux/reducers/usersList';

describe(usersListReducer, () => {
  const initialState = {
    isLoading: false,
    users: [{
      email: '',
      first_name: '',
      id: 1,
      last_name: '',
      role: {
        id: '',
        name: '',
      },
    }],
  };

  it('should return initial state', () => {
    expect(usersListReducer(undefined, {})).toEqual(initialState);
  });

  it('should returns a list of users', () => {
    const action = {
      type: 'GET_USERS_SUCCESS',
      payload: {
        users: [{
          first_name: '', last_name: '', email: '', role: {},
        }],
      },
    };
    expect(usersListReducer(undefined, action)).toEqual({
      isLoading: false,
      users: [{
        first_name: '', last_name: '', email: '', role: {},
      }],
    });
  });

  it('removes a user from userList', () => {
    const userId = 1;
    const currentState = {
      users: [
        {
          id: 1, first_name: '', last_name: '', email: '',
        },
        {
          id: 2, first_name: '', last_name: '', email: '',
        },
      ],
    };

    const action = {
      type: 'REMOVE_USER_FROM_LIST',
      payload: userId,
    };

    expect(usersListReducer(currentState, action)).toEqual({
      users: [{
        id: 2, first_name: '', last_name: '', email: '',
      }],
    });
  });
});
