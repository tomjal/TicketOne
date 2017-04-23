import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import { authActions } from './../actionTypes';
import { setApplicationContextAsMockClient } from './../authActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions - authActionCreators', () => {

    beforeEach(() => {
        fetchMock.restore();
    });

    it('sets applications context as mock client', () => {
        // Arrange
        const mockId = 'JohnLee';
        const mockAuth = { role: 'client', id: mockId };
        const expectedActions = [
            {
                type: authActions.GET_AUTH_CONTEXT.SUCCESS,
                data: mockAuth
            }
        ]
        const store = mockStore();

        // Act
        store.dispatch(setApplicationContextAsMockClient(mockId));
        const actions = store.getActions();

        // Assert
        expect(actions).toEqual(expectedActions);
    });
})