import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { roomsActions } from "./actionTypes";

export function getAllOpenRoomsIds() {
    return (dispatch) => apiSchema.rooms.getAllOpen()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function getClientRoomsIds(clientId) {
    return (dispatch) => apiSchema.rooms.getByClientId(clientId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function createClientRoom(clientId, roomTopic) {
    return (dispatch) => apiSchema.rooms.createNew(clientId, roomTopic)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch(getClientRoomsIds(clientId));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function markRoomAsResolved(clientId, roomId) {
    return (dispatch) => apiSchema.rooms.markAsResolved(roomId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch(getClientRoomsIds(clientId));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function markRoomAsUnresolved(clientId, roomId) {
    return (dispatch) => apiSchema.rooms.markAsUnresolved(roomId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch(getClientRoomsIds(clientId));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}