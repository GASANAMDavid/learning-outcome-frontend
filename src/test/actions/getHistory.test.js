import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/api';
import getMatricesHistory, {
  setVersionIdToBeDisplayed,
} from '../../redux/actions/getMatricesHistory';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('getHistory action', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => moxios.uninstall());

  it('has an action to get history on success', () => {
    const store = mockStore({});
    const expectedMatricesHistory = {
      matrices: [
        {
          id: 1,
          data: [
            {
              id: 1,
            },
          ],
          updated_at: 166772374,
        },
      ],
      skill_level_options: [{ id: '1', display: '' }],
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
          type: 'GET_MATRICES_HISTORY_START',
        },
        {
          type: 'SET_VERSION_ID_TO_BE_DISPLAYED',
          payload: 1,
        },
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
      versionId: 1,
    };

    const store = mockStore(currentState);
    const expectedActions = [
      {
        type: 'SET_VERSION_ID_TO_BE_DISPLAYED',
        payload: 1,
      },
    ];

    store.dispatch(setVersionIdToBeDisplayed(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
