import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import setSnackbar from '../../redux/actions/snackbar';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('snackbar actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it('has an action to set snackbar', () => {
    const expectedAction = [
      {
        type: 'SET_SNACKBAR',
        payload: {
          snackbarOpen: false,
          snackbarType: 'success',
          snackbarMessage: 'Successfull did something',
        },
      },
    ];
    store.dispatch(setSnackbar({
      snackbarOpen: false,
      snackbarType: 'success',
      snackbarMessage: 'Successfull did something',
    }));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
