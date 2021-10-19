import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/api';
import deleteUser from '../../redux/actions/deleteUser';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(deleteUser, () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => moxios.uninstall());
  it('has an action to delete a user', () => {
    const userId = 1;

    const store = mockStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204,
      });
    });

    return store.dispatch(deleteUser(userId))
      .then(() => {
        const expectedActions = [
          {
            type: 'REMOVE_USER_FROM_LIST',
            payload: userId,
          },
          {
            type: 'SET_SNACKBAR',
            payload: {
              snackbarMessage: 'User deleted successfully',
              snackbarOpen: true,
              snackbarType: 'success',
            },
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
