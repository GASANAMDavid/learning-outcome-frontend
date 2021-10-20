import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/api';
import getRoles from '../../redux/actions/getRoles';

jest.mock('../../helpers/auth');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(getRoles, () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => moxios.uninstall());

  it('has an action to get an array of roles', () => {
    const store = mockStore({});
    const expectedResponse = {
      roles: [{
        id: '1', name: '',
      }],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });

    return store.dispatch(getRoles())
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: 'GET_ROLES_SUCCESS',
          payload: expectedResponse,
        }]);
      });
  });
});
