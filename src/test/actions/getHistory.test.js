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
      matrices: [
        {
          matrix: [
            {
              id: 1,
            },
          ],
          updated_at: 166772374,
        },
      ],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedMatricesHistory,
      });
    });

    return store.dispatch(getMatricesHistory()).then(() => {
      const expectedActions = [
        {
          type: 'GET_HISTORY_SUCCESS',
          payload: expectedMatricesHistory,
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('has an action to set a version to be displayed', () => {
    const currentState = {
      version_id: 1,
    };

    const store = mockStore(currentState);
    const expectedActions = [
      {
        type: 'SET_VERSION_ID_TO_BE_DISPLAYED',
        payload: 2,
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
