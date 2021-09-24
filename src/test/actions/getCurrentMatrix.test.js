import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getCurrentMatrix from '../../redux/actions/getCurrentMatrix';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('getCurrentMatrix action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => moxios.uninstall());

  it('has action to get current outcome matrix when succeded', () => {
    const initialState = {
      matrix: {},
      errors: '',
      newUpdates: false,
    };
    const store = mockStore(initialState);
    const expectedOutcomeMatrix = {
      matrix: {
        data: [{
          id: '1',
          learning_outcome: 'Testing redux',
          skills_level: 1,
          theme: {
            title: 'Automated testing',
            link: 'https://github.com/abcd',
          },
          apprenticeship_level: 1,
        }],
        skill_level_options:
          [{
            id: 1,
            description: 'Default',
            color: 'white',
          }],
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedOutcomeMatrix,
      });
    });

    return store.dispatch(getCurrentMatrix())
      .then(() => {
        const expectedActions = {
          type: 'GET_CURRENT_MATRIX_SUCCESS',
          payload: expectedOutcomeMatrix,
        };
        expect(store.getActions()[0]).toEqual(expectedActions);
      });
  });
});
