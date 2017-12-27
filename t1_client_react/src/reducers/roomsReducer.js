// eslint-disable-next-line
import update from 'immutability-helper';
import { roomsActions } from '../actions/actionTypes';

const initState = [];

export function roomsReducer(state = initState, action) {
    switch (action.type) {
        case roomsActions.GET_ROOMS_ALL.SUCCESS:
            return action.data;
        default:
            return state;
    }
}
