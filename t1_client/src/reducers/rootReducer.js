import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { messagesReducer } from './messagesReducer';
import { roomsReducer } from './roomsReducer';

export const rootReducer = combineReducers({
    context: authReducer,
    messages: messagesReducer,
    rooms: roomsReducer
});
