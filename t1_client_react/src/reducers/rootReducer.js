import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { messagesReducer } from './messagesReducer';
import { roomsReducer } from './roomsReducer';
import { statsReducer } from './statsReducer';

export const rootReducer = combineReducers({
    context: authReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    stats: statsReducer
});
