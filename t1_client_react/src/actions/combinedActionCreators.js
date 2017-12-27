import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { roomsActions } from "./actionTypes";

import { getMessagesByRooms } from "./messagesActionCreators";

export function getClientInitRoomsData(clientId) {
    return (dispatch) => apiSchema.rooms.getByClientId(clientId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
            dispatch(getMessagesByRooms(data));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function getEmployeeInitRoomsData() {
    return (dispatch) => apiSchema.rooms.getAllOpen()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: roomsActions.GET_ROOMS_ALL.SUCCESS, data });
            dispatch(getMessagesByRooms(data));
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}
