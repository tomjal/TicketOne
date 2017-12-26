// eslint-disable-next-line
import update from 'immutability-helper';
import { statsActions } from '../actions/actionTypes';

const initState = [];

export function statsReducer(state = initState, action) {
    switch (action.type) {
        case statsActions.GET_STATS_ALL.SUCCESS:
            return action.data;
        default:
            return state;
    }
}
