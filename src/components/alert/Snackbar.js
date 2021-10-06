import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import setSnackbar from '../../redux/actions/snackbar';

// eslint-disable-next-line react/jsx-props-no-spreading
const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const CustomizedSnackbars = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.snackbarReducer);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnackbar(false, store.snackbarType, store.snackbarMessage));
  };

  return (
    <Stack
      spacing={2}
      sx={{ width: '100%' }}
    >

      <Snackbar
        open={store.snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={store.snackbarType}
          sx={{ width: '100%' }}
        >
          {store.snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomizedSnackbars;
