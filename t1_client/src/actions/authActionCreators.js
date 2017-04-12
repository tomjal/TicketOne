import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { authActions } from "./actionTypes";

export function setApplicationContextAsMockClient(ident) {
    const mockAuth = { role: "client", id: ident };
    return (dispatch) => {
        dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data: mockAuth })
    };
}

export function setApplicationContextAsMockEmployee() {
    const mockAuth = { role: "employee", id: "Employee_TicketOne" };
    return (dispatch) => {
        dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data: mockAuth })
    };
}

export function getApplicationContext() {
    return (dispatch) => {
        return apiSchema.context.get()
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data });
            })
            .catch(err => {
                dispatchFetchError(err, authActions.GET_AUTH_CONTEXT.ERROR, dispatch);
            });
    }
}

export function postAuthorizationData() {
    return (dispatch) => {
        return apiSchema.auth.post()
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
}
