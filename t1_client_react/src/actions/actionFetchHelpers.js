// eslint-disable-next-line
import { fetchActions } from './actionTypes';

const GENERIC_ERROR = "GENERIC_SERVER_ERROR";

export function checkIfFetchStatusOk(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

export function dispatchFetchError(err, errActionType, dispatch) {
    dispatch({ type: errActionType || GENERIC_ERROR, err });
}