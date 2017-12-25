import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { roomsActions } from "./actionTypes";

export function getAllOpenRoomsIds() {
    console.log("getAllOpenRoomsIds()")
    return (dispatch) => apiSchema.rooms.getAllOpenRoomsIds()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function getClientRooms(clientId) {
    return (dispatch) => apiSchema.rooms.getClientRoomsIds(clientId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            console.log("getClientRooms(clientId)")
            console.log(clientId)
            //TODO
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function createClientRoom(clientId, roomTopic) {
    return (dispatch) => apiSchema.rooms.postClientRoom(clientId, roomTopic)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch(getClientRooms(clientId));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function markRoomAsResolved(clientId, roomId) {
    return (dispatch) => apiSchema.rooms.putMarkRoomAsResolved(roomId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch(getClientRooms(clientId));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function markRoomAsUnresolved(clientId, roomId) {
    return (dispatch) => apiSchema.rooms.putMarkRoomAsUnresolved(roomId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch(getClientRooms(clientId));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}