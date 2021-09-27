import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { showErrorSnackbar, clearSnackbar } from '../../redux/actions/snackbar';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('snackbar actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it('has an action to clear snackbar', () => {
    const expectedAction = [
      {
        type: 'SNACKBAR_CLEAR',
      },
    ];
    store.dispatch(clearSnackbar());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('has an action to show errors snackbar', () => {
    const expectedAction = [
      {
        type: 'SNACKBAR_ERROR',
        payload: 'Error occured',
      },
    ];
    store.dispatch(showErrorSnackbar('Error occured'));
    console.log(store.getActions());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
