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