import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import createUser, { addUserInfo } from '../../redux/actions/createUser';
import axiosInstance from '../../helpers/api';

jest.mock('../../helpers/auth');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(createUser, () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => moxios.uninstall());

  it('has an action to add user info to the user state', () => {
    const store = mockStore({});
    const expectedAction = [{
      type: 'ADD_USER_INFO',
      payload: { firstName: 'John' },
    }];

    store.dispatch(addUserInfo({ firstName: 'John' }));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('has an action to create a user in the database', () => {
    const store = mockStore({
      createUserReducer: {
        user: { name: 'John', email: '' },
      },
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204,
        response: { message: 'Created Successfully' },
      });
    });

    return store.dispatch(createUser())
      .then(() => {
        const expectedActions = [
          {
            type: 'CREATE_USER_START',
          },
          {
            type: 'REMOVE_USER_INFO',
          },
          {
            type: 'SET_SNACKBAR',
            payload: 'Created Successfully',
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
