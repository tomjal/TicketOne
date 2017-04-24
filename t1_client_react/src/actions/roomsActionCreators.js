import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { roomsActions } from "./actionTypes";

export function getAllRooms() {
    return (dispatch) => {
        return apiSchema.rooms.getAll()
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
            })
            .catch(err => dispatchFetchError(err, dispatch));
    }
}

export function getClientRoom() {
    return (dispatch) => {
        return apiSchema.rooms.getClient()
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
            })
            .catch(err => dispatchFetchError(err, dispatch));
    }
}