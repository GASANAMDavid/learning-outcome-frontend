import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/api';
import saveProfileUpdates, { updateUserProfile } from '../../redux/actions/updateUserProfile';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('update user profile', () => {
  it('has an action to update user profile attributes', () => {
    const store = mockStore({});
    const expectedAction = [{
      type: 'UPDATE_USER_PROFILE',
      payload: { first_name: 'Jane' },
    }];
    store.dispatch(updateUserProfile({ first_name: 'Jane' }));
    expect(store.getActions()).toEqual(expectedAction);
  });

  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => { moxios.uninstall(); });

  it('has an action to save profile updates', () => {
    const store = mockStore({
      updateUserProfileReducer: { profileUpdates: { first_name: 'Janet' } },
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204,
      });
    });

    return store.dispatch(saveProfileUpdates())
      .then(() => {
        const expectedActions = [
          {
            type: 'SET_SNACKBAR',
            payload: {
              snackbarMessage: 'updated successfully',
              snackbarOpen: true,
              snackbarType: 'success',
            },

          }];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
