import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import { messagesActions } from './../actionTypes';
import { getAllMessages } from './../messagesActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions - messagesActionCreators', () => {

  beforeEach(() => {
    fetchMock.restore();
  });

  it('downloads all messages', () => {
    // Arrange
    const messagesList = ['first', 'second'];
    const expectedActions = [
      {
        type: messagesActions.GET_MESSAGES_ALL.SUCCESS,
        data: messagesList
      }
    ]
    const store = mockStore();
    fetchMock.get('*', messagesList);

    // Act
    const action = store.dispatch(getAllMessages());

    // Assert
    return action.then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
})