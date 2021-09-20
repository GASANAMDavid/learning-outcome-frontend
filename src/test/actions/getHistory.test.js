import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getMatricesHistory from '../../redux/actions/getMatricesHistory';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('getHistory action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => moxios.uninstall());

  it('has an action to get history on success', () => {
    const store = mockStore({});
    const expectedMatricesHistory = {
      matrices: [{
        matrix: [
          {
            id: 1,
          },
        ],
        updated_at: new Date().toUTCString,
      }],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedMatricesHistory,
      });
    });

    return store.dispatch(getMatricesHistory())
      .then(() => {
        const expectedActions = [{
          type: 'GET_HISTORY_SUCCESS',
          payload: expectedMatricesHistory,
        }];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
