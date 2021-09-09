import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import updateLocalMatrix from '../../redux/actions/updateCurrentMatrix';

const mockStore = configureStore([thunk]);

describe('updateCurrentMatrix', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('has action to update local matrix state', () => {
    const currentState = {
      matrix: {
        data: [{
          id: 1,
          learning_outcome: 'Updating local store',
          skills_level: '1',
          theme: {
            title: 'Redux action',
            link: 'http://redux.org/actions',
          },
        }],
      },
      errors: '',
      newUpdates: false,
    };
    const store = mockStore(currentState);
    const newState = {
      id: '1',
      skills_level: '2',
    };
    const expectedActions = [{
      type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
      payload: newState,
    }, { type: 'SET_NEW_UPDATE_FLAG', payload: true }];
    store.dispatch(updateLocalMatrix({ state: newState, flag: true }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
