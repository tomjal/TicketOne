import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import { authActions } from './../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions - authActionCreators', () => {

    beforeEach(() => {
        fetchMock.restore();
    });

    it('sets application context as mock client', () => {
        // Arrange
        const ident = 'JohnLee';
        const mockAuth = { role: "client", id: ident };
        const mockClientAction = {
            type: authActions.GET_AUTH_CONTEXT.SUCCESS,
            data: ident
        };

        // Act
        const actions = store.getActions();

        // Assert
        expect(actions).toEqual([mockClientAction]);
    });
})