import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Typography, TextField, Button, Box,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';
import { setItem } from '../../helpers/localStorage';
import Auth from '../../helpers/auth';
import setSnackbar from '../../redux/actions/snackbar';
import createUser, { addUserInfo } from '../../redux/actions/createUser';
import loginSuccess from '../../redux/actions/login';

const auth0Client = new Auth();

const useStyles = makeStyles({
  input: {
    backgroundColor: '#eee',
    border: 'none',
    padding: '12px 15px',
    marginBottom: '8px',
    width: '100%',
  },
  button: {
    borderRadius: '25px',
    border: '1px solid #FF4B2B',
    backgroundColor: '#934a4a',
    marginTop: '8px',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
    '&:active': { transform: 'scale(0.95)' },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: 'none',
    },
  },
});

const Home = () => {
  const [toggleRight, setToggleRight] = React.useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.createUserReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth0Client.handleAuthentication((error, authResult) => {
      if (authResult && authResult.accessToken) {
        setItem('accessToken', authResult.accessToken);
        dispatch(loginSuccess());
        history.push('/dashboard/current_matrix');
      } else { console.log(error); }
    });
  }, []);

  const handleSignIn = () => {
    auth0Client.signIn(user, (error, authResult) => {
      console.log(error, authResult);
    });
  };

  const handleRegister = () => {
    auth0Client.register(user, (error) => {
      if (error) {
        console.log(user, error);
      } else {
        dispatch(setSnackbar(
          {
            snackbarOpen: true,
            snackbarType: 'success',
            snackbarMessage: 'Successfuly created an account',
          },
        ));
        dispatch(createUser());
      }
    });
  };

  const handleChange = (textField) => (event) => {
    const newUserInfo = {
      ...user,
      [textField]: event.target.value,
    };

    dispatch(addUserInfo(newUserInfo));
  };
  const classes = useStyles();

  return (
    <>
      <Container fixed>
        <Box sx={{ height: '100vh', width: '100%' }} className={`container ${toggleRight ? 'right-panel-active' : ''}`} id="container">

          <div className="form-container sign-up-container">
            <form>
              <Typography variant="h4">
                Create Account
              </Typography>
              <div className="social-container">
                <div><LinkedInIcon className="social" /></div>
                <div><GitHubIcon className="social" /></div>
                <div><GoogleIcon className="social" /></div>
              </div>
              <Typography variant="h6">or use your email for registration</Typography>
              <TextField
                className={classes.input}
                variant="outlined"
                label="First Name"
                onChange={handleChange('first_name')}
              />
              <TextField
                className={classes.input}
                variant="outlined"
                label="First Name"
                onChange={handleChange('last_name')}
              />
              <TextField
                className={classes.input}
                variant="outlined"
                label="Email"
                onChange={handleChange('email')}
              />
              <TextField
                className={classes.input}
                variant="outlined"
                label="Password"
                type="password"
                onChange={handleChange('password')}
              />
              <Button
                className={classes.button}
                variant="outlined"
                onClick={handleRegister}
              >
                Sign Up
              </Button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <Typography variant="h4">
                Sign in
              </Typography>
              <div className="social-container">
                <div><LinkedInIcon className="social" onClick={() => console.log('Sign in')} /></div>
                <div><GitHubIcon className="social" onClick={() => console.log('Sign in')} /></div>
                <div><GoogleIcon className="social" onClick={() => console.log('Sign in')} /></div>
              </div>
              <Typography variant="h6">or use your account</Typography>
              <TextField
                className={classes.input}
                variant="outlined"
                label="Email"
                onChange={handleChange('email')}
              />
              <TextField
                className={classes.input}
                variant="outlined"
                label="Password"
                type="password"
                onChange={handleChange('password')}
              />
              <Typography variant="h6">Forgot your password?</Typography>
              <Button variant="outlined" className={classes.button} onClick={handleSignIn}>Sign In</Button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <Typography variant="h5">
                  Welcome Back!
                </Typography>
                <Typography variant="h6">
                  To keep connected with us please login with your personal info
                </Typography>
                <Button variant="outlined" className={classes.button} id="signIn" onClick={() => setToggleRight(!toggleRight)}>Sign In</Button>
              </div>
              <div className="overlay-panel overlay-right">
                <Typography variant="h5">
                  {'Don\'t have an account yet?'}
                </Typography>
                <Typography variant="h6">
                  Please consider signing up.
                </Typography>
                <Button variant="outlined" className={classes.button} id="signUp" onClick={() => setToggleRight(!toggleRight)}>Sign Up</Button>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Home;
