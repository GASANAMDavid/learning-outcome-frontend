const updateLocalMatrixSuccess = (payload) => ({
  type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
  payload,
});

const setNewUpdateFlag = (payload) => ({
  type: 'SET_NEW_UPDATE_FLAG',
  payload,
});

const updateLocalMatrix = (payload) => (dispatch) => {
  dispatch(updateLocalMatrixSuccess(payload.newSkillLevel));
  dispatch(setNewUpdateFlag(payload.flag));
};

export default updateLocalMatrix;
