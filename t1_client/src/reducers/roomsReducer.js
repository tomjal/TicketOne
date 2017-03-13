// eslint-disable-next-line
import update from 'react-addons-update';
import { roomsActions } from '../actions/actionTypes';

const initState = [];

export function roomsReducer(state = initState, action) {
    switch (action.type) {
        case roomsActions.GET_ROOMS_ALL:
            return action.data;
        default:
            return state;
    }
}
