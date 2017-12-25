import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { roomsActions } from "./actionTypes";

export function getAllRooms() {
    return (dispatch) => apiSchema.rooms.getAll()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function getClientRooms() {
    return (dispatch) => apiSchema.rooms.getClient()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}