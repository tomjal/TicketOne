import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { messagesActions } from "./actionTypes";

export function getAllMessages() {
    return function (dispatch) {
        return apiSchema.messages.getAll()
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: messagesActions.GET_MESSAGES_ALL.SUCCESS, data });
            })
            .catch(err => dispatchFetchError(err, dispatch));
    }
}

export function getMessagesByRoom(channelId) {
    return function (dispatch) {
        return apiSchema.messages.getByRoom(channelId)
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: messagesActions.GET_MESSAGES_BY_ROOM.SUCCESS, data });
            })
            .catch(err => dispatchFetchError(err, dispatch));
    }
}

export function sendMessageToRoom(message, channelId, senderRole, senderId) {
    return function (dispatch) {
        return apiSchema.messages.post(message, channelId, senderRole, senderId)
            .then(res => checkIfFetchStatusOk(res))
            .then(res => res.json())
            .then(data => {
                dispatch({ type: messagesActions.POST_MESSAGE.SUCCESS, data });
            })
            .catch(err => dispatchFetchError(err, dispatch));
    }
}