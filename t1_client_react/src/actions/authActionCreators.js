import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { authActions } from "./actionTypes";
import { ROLES } from './../consts/roles';

export function setApplicationContextAsMockClient(idNumber) {
    const mockAuth = { role: ROLES.CLIENT, id: idNumber };
    return (dispatch) => {
        dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data: mockAuth })
    };
}

export function setApplicationContextAsMockEmployee() {
    const MASTER_EMPLOYEE_ID = 201;
    const mockAuth = { role: ROLES.EMPLOYEE, id: MASTER_EMPLOYEE_ID };
    return (dispatch) => {
        dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data: mockAuth })
    };
}

export function getApplicationContext() {
    return (dispatch) => apiSchema.context.get()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data });
        })
        .catch(err => {
            dispatchFetchError(err, authActions.GET_AUTH_CONTEXT.ERROR, dispatch);
        });
}

export function postAuthorizationData() {
    return (dispatch) => apiSchema.auth.post()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: authActions.POST_LOGIN.SUCCESS });
            dispatch(getApplicationContext());
        })
        .catch(err => {
            dispatchFetchError(err, authActions.POST_LOGIN.ERROR, dispatch);
        });
}
