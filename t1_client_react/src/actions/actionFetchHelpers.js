// eslint-disable-next-line
import { fetchActions } from './actionTypes';

export function checkIfFetchStatusOk(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

export function dispatchFetchError(err, errActionType, dispatch) {
    dispatch({ type: errActionType, err });
}