import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/api';
import getUsers from '../../redux/actions/getUsers';

jest.mock('../../helpers/auth');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(getUsers, () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => moxios.uninstall());

  it('has an action to get a list of all users', () => {
    const store = mockStore({});
    const expectedResponse = {
      users: [{
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane@doe.com',
        role: { id: 1, admin: false },
      }],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });

    return store.dispatch(getUsers())
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: 'GET_USERS_START',
        }, {
          type: 'GET_USERS_SUCCESS',
          payload: expectedResponse,
        }]);
      });
  });
});
