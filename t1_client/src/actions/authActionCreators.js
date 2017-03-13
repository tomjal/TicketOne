import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { authActions } from "./actionTypes";

export function getApplicationContext() {
    return function (dispatch) {
        return apiSchema.context.get()
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data });
            })
            .catch(err => {
                // only for test purpose
                const mockAuthEmployee = { role: "client" };
                dispatch({ type: authActions.GET_AUTH_CONTEXT.SUCCESS, data: mockAuthEmployee });
                //
                dispatchFetchError(err, authActions.GET_AUTH_CONTEXT.ERROR, dispatch);
            });
    }
}

export function postAuth() {
    return function (dispatch) {
        return apiSchema.auth.post()
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: authActions.POST_LOGIN.SUCCESS });
                dispatch(getApplicationContext());
            })
            .catch(err => {
                dispatchFetchError(err, authActions.POST_LOGIN.ERROR, dispatch);
                // only for test purpose
                //dispatch(getApplicationContext());
                //
            });
    }
}
