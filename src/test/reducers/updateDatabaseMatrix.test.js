import updateDatabaseMatrixReducer from '../../redux/reducers/updateDatabaseMatrix';

describe(updateDatabaseMatrixReducer, () => {
  const initialState = {
    message: '',
    error: '',
  };

  it('returns initialState', () => {
    expect(updateDatabaseMatrixReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the updated successfully message', () => {
    const action = {
      type: 'UPDATE_DATABASE_MATRIX_SUCCESS',
      payload: {
        message: 'Updated successfully',
      },
    };
    expect(updateDatabaseMatrixReducer(undefined, action)).toEqual({ message: 'Updated successfully', error: '' });
  });
});
