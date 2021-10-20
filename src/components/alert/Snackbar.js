/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Slide } from '@mui/material';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import setSnackbar from '../../redux/actions/snackbar';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const TransitionLeft = (props) => <Slide {...props} direction="left" />;

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
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        style={{ marginTop: '5%' }}
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
