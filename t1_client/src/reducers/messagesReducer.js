// eslint-disable-next-line
import update from 'immutability-helper';
import { messagesActions } from '../actions/actionTypes';

const initState = [];

export function messagesReducer(state = initState, action) {
    switch (action.type) {
        case messagesActions.GET_MESSAGES_ALL.SUCCESS:
            return action.data;
        case messagesActions.GET_MESSAGES_BY_ROOM.SUCCESS:
            return action.data;
        default:
            return state;
    }
}
