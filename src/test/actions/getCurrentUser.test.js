import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/api';
import getCurrentUser, { updateUserProfile } from '../../redux/actions/getCurrentUser';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(getCurrentUser, () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => moxios.uninstall());
  it('has an action to get current user information', () => {
    const store = mockStore({});
    const expectedUserInfo = {
      user: {
        first_name: 'John',
        last_name: 'Doe',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedUserInfo,
      });
    });

    return store.dispatch(getCurrentUser())
      .then(() => {
        const expectedActions = [
          {
            type: 'GET_CURRENT_USER_START',
          },
          {
            type: 'GET_CURRENT_USER_SUCCESS',
            payload: expectedUserInfo,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('has an action to update the user profile', () => {
    const store = mockStore({});
    const expectedAction = [
      {
        type: 'UPDATE_USER_PROFILE',
        payload: {
          first_name: 'Jane',
        },
      },
    ];
    store.dispatch(updateUserProfile({ first_name: 'Jane' }));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
