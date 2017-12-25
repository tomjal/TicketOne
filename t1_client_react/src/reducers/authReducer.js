// eslint-disable-next-line
import update from 'immutability-helper';
import { authActions } from '../actions/actionTypes';
import { ROLES } from './../consts/roles';

const initState = { role: ROLES.UNSPECIFIED };


//user id in redux
export function authReducer(state = initState, action) {
    switch (action.type) {
        case authActions.GET_AUTH_CONTEXT.SUCCESS:
            return action.data;
        default:
            return state;
    }
}
