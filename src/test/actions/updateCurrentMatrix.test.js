import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import updateLocalMatrix, { updateDatabaseMatrix } from '../../redux/actions/updateCurrentMatrix';

const mockStore = configureStore([thunk]);

describe('updateCurrentMatrix', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  describe('Local store matrix', () => {
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
      const newSkillLevel = {
        id: '1',
        skills_level: '2',
      };
      const expectedActions = [{
        type: 'UPDATE_LOCAL_MATRIX_SUCCESS',
        payload: newSkillLevel,
      }, { type: 'SET_NEW_UPDATE_FLAG', payload: true }];
      store.dispatch(updateLocalMatrix({ newSkillLevel, flag: true }));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Database Matrix', () => {
    it('has an action to update the database matrix', () => {
      const currentState = {
        message: '',
        errors: '',
      };

      const store = mockStore(currentState);
      const expectedResponse = {
        message: 'Updated successfully',
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: expectedResponse,
        });
      });

      return store.dispatch(updateDatabaseMatrix([{ id: 1, skills_level_id: 2 }]))
        .then(() => {
          const expectedActions = [{
            type: 'SET_NEW_UPDATE_FLAG',
            payload: false,
          }, {
            type: 'UPDATE_DATABASE_MATRIX_SUCCESS',
            payload: {
              message: 'Updated successfully',
            },
          }];
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
