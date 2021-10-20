import rolesReducer from '../../redux/reducers/roles';

describe(rolesReducer, () => {
  const initialState = {
    roles: [{ id: '', name: '' }],
  };

  it('should return initialState', () => {
    expect(rolesReducer(undefined, {})).toEqual(initialState);
  });

  it('returns array of roles', () => {
    const expectedActions = {
      type: 'GET_ROLES_SUCCESS',
      payload: {
        roles: [
          { id: '', name: '' },
          { id: '', name: '' },
        ],
      },
    };
    expect(rolesReducer({}, expectedActions)).toEqual({ roles: [{ id: '', name: '' }, { id: '', name: '' }] });
  });
});
