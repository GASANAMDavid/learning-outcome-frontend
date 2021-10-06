import auth0 from 'auth0-js';
import dotenv from 'dotenv';
import { removeItem } from './localStorage';

dotenv.config();

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile email',
    });
  }

  signIn(credentials, handleError) {
    this.auth0.login(
      {
        realm: 'Username-Password-Authentication',
        username: credentials.email,
        password: credentials.password,
      },
      handleError,
    );
  }

  register(newUser, handleError) {
    this.auth0.signup(
      {
        connection: 'Username-Password-Authentication',
        email: newUser.email,
        password: newUser.password,
        name: `${newUser.first_name} ${newUser.last_name}`,
        username: newUser.email,
      },
      handleError,
    );
  }

  logout() {
    removeItem('accessToken');
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      returnTo: 'http://localhost:3001',
    });
  }

  handleAuthentication(callback) {
    this.auth0.parseHash(callback);
  }
}
