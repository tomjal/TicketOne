// eslint-disable-next-line
import update from 'react-addons-update';
import { messagesActions } from '../actions/actionTypes';

const initState = [];

export function messagesReducer(state = initState, action) {
    switch (action.type) {
        case messagesActions.GET_MESSAGES_ALL:
            return action.data;
        default:
            return state;
    }
}
