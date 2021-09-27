
export const showErrorSnackbar = (payload) => (dispatch) => dispatch({ type: 'SNACKBAR_ERROR', payload });

export const clearSnackbar = () => (dispatch) => dispatch({ type: 'SNACKBAR_CLEAR' });
