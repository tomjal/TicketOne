export const fetchActions = {
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_INPROGRESS: "FETCH_INPROGRESS",
    FETCH_ERROR: "FETCH_ERROR"
}

export const authActions = {
    GET_AUTH_CONTEXT: {
        SUCCESS: "GET_AUTH_CONTEXT_SUCCESS",
        ERROR: "GET_AUTH_CONTEXT_ERROR"
    },
    POST_LOGIN: {
        SUCCESS: "POST_LOGIN_SUCCESS",
        ERROR: "POST_LOGIN_ERROR"
    }
}

export const messagesActions = {
    GET_MESSAGES_ALL: {
        SUCCESS: "GET_MESSAGES_ALL_SUCCESS",
        ERROR: "GET_MESSAGES_ALL_ERROR"
    },
    GET_MESSAGES_BY_ROOM: {
        SUCCESS: "GET_MESSAGES_BY_ROOM_SUCCESS",
        ERROR: "GET_MESSAGES_BY_ROOM_ERROR"
    },
    POST_MESSAGE: {
        SUCCESS: "POST_MESSAGE_SUCCESS",
        ERROR: "POST_MESSAGE_ERROR"
    }
}

export const roomsActions = {
    GET_ROOMS_ALL: {
        SUCCESS: "GET_ROOMS_ALL_SUCCESS",
        ERROR: "GET_ROOMS_ALL_ERROR"
    }
}

export const statsActions = {
    GET_STATS_ALL: {
        SUCCESS: "GET_STATS_ALL_SUCCESS",
        ERROR: "GET_STATS_ALL_ERROR"
    }
}