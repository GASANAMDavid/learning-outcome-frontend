import createUserReducer from '../../redux/reducers/createUser';

describe(createUserReducer, () => {
  const initialState = {
    user: { role: { id: '' } },
  };
  it('should return initialState', () => {
    expect(createUserReducer(undefined, {})).toEqual(initialState);
  });

  it('adds info to the user state', () => {
    const action = {
      type: 'ADD_USER_INFO',
      payload: { first_name: 'John' },
    };
    const expectedState = {
      user: { first_name: 'John', role: { id: '' } },
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
