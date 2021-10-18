import currentUserProfileReducer from '../../redux/reducers/currentUserProfile';

describe(currentUserProfileReducer, () => {
  it('sets the current user profile ', () => {
    const initialState = {
      isLoading: false,
      profile: {},
    };
    const action = {
      type: 'GET_CURRENT_USER_SUCCESS',
      payload: {
        user: {
          first_name: 'Jane', last_name: 'Doe', email: 'jane@doe.com', role_id: 1,
        },
      },
    };

    const expectedState = {
      isLoading: false,
      profile: {
        first_name: 'Jane', last_name: 'Doe', email: 'jane@doe.com', role_id: 1,
      },
    };

    expect(currentUserProfileReducer(initialState, action)).toEqual(expectedState);
  });

  it('updates the current user profile', () => {
    const currentUserProfile = {
      profile: {
        first_name: 'Jane', last_name: 'Doe', email: 'jane@doe.com', role_id: 1,
      },
    };
    const action = {
      type: 'UPDATE_USER_PROFILE',
      payload: {
        last_name: 'Dorothy',
      },
    };
    const expectedUserProfile = {
      profile: {
        first_name: 'Jane', last_name: 'Dorothy', email: 'jane@doe.com', role_id: 1,
      },
    };

    expect(currentUserProfileReducer(currentUserProfile, action)).toEqual(expectedUserProfile);
  });
});
