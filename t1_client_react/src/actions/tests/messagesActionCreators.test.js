import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import { messagesActions } from './../actionTypes';
import { getMessagesByRoom } from './../messagesActionCreators';

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
        type: messagesActions.GET_MESSAGES_BY_ROOM.SUCCESS,
        data: messagesList
      }
    ]
    const store = mockStore();
    fetchMock.get('*', messagesList);

    // Act
    const action = store.dispatch(getMessagesByRoom(0));

    // Assert
    return action.then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
})