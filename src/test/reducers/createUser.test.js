import createUserReducer from '../../redux/reducers/createUser';

describe(createUserReducer, () => {
  const initialState = {
    user: {},
  };
  it('should return initialState', () => {
    expect(createUserReducer(undefined, {})).toEqual(initialState);
  });

  it('adds info to the user state', () => {
    const action = {
      type: 'ADD_USER_INFO',
      payload: { name: 'John' },
    };
    const expectedState = {
      user: { name: 'John' },
    };
    expect(createUserReducer(initialState, action)).toEqual(expectedState);
  });

  it('resets user to initialState', () => {
    const action = {
      type: 'REMOVE_USER_INFO',
    };
    const state = {
      user: { name: 'John' },
    };
    expect(createUserReducer(state, action)).toEqual(initialState);
  });
});
