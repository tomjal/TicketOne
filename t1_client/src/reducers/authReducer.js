// eslint-disable-next-line
import update from 'react-addons-update';
import { authActions } from '../actions/actionTypes';
import { ROLES } from './../consts/roles';

const initState = { role: ROLES.UNSPECIFIED };

export function authReducer(state = initState, action) {
    switch (action.type) {
        case authActions.GET_AUTH_CONTEXT.SUCCESS:
            return action.data;
        default:
            return state;
    }
}
