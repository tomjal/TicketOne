import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { messagesActions } from "./actionTypes";

export function getAllMessages() {
    return (dispatch) => apiSchema.messages.getAll()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: messagesActions.GET_MESSAGES_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function getMessagesByRoom(channelId) {
    return (dispatch) => apiSchema.messages.getByRoom(channelId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: messagesActions.GET_MESSAGES_BY_ROOM.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function getMessagesByRooms(rooms) {
    console.log("getMessagesByRooms ddddddddddddd")
    console.log(rooms)
    const onlyIds = rooms.map((room) => { return room.id })
    console.log("onlyIds")
    console.log(onlyIds)
    return (dispatch) => apiSchema.messages.getByRooms(onlyIds)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: messagesActions.GET_MESSAGES_BY_ROOM.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}

export function sendMessageToRoom(message, roomId, senderRole, senderId) {
    return (dispatch) => apiSchema.messages.post(message, roomId, senderRole, senderId)
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: messagesActions.POST_MESSAGE.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}