import { httpVerbs, buildReqOptions } from "./apiFetchHelpers";

const apiPrefix = "/api/v1";

const apiURIs = {
    MESSAGES: "/messages",
    ROOMS: "/rooms",
    CONTEXT: "/context",
    AUTH: "/login"
}

function getAuthContext() {
    return fetch(apiPrefix + apiURIs.CONTEXT, buildReqOptions(httpVerbs.GET));
}

function postAuthData(login, pass) {
    const authObject = { login: login, pass: pass };
    return fetch(apiPrefix + apiURIs.AUTH, buildReqOptions(httpVerbs.POST, authObject));
}

function getMessagesAll() {
    return fetch(apiPrefix + apiURIs.ROOMS + "/all" + apiURIs.MESSAGES, buildReqOptions(httpVerbs.GET));
}

function getMessagesByRoom(channelId) {
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + channelId + apiURIs.MESSAGES, buildReqOptions(httpVerbs.GET));
}

function postMessageToRoom(message, channelId, senderRole, senderId) {
    const data = { message: message, senderRole: senderRole, senderId: senderId };
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + channelId + apiURIs.MESSAGES, buildReqOptions(httpVerbs.POST, data));
}

function getRoomsAll() {
    return fetch(apiPrefix + apiURIs.ROOMS + "/all", buildReqOptions(httpVerbs.GET));
}

function getClientRoom() {
    return fetch(apiPrefix + apiURIs.ROOMS + "/client", buildReqOptions(httpVerbs.GET));
}

export const apiSchema = {
    context: {
        get: getAuthContext
    },
    auth: {
        post: postAuthData
    },
    messages: {
        getAll: getMessagesAll,
        getByRoom: getMessagesByRoom,
        post: postMessageToRoom
    },
    rooms: {
        getAll: getRoomsAll,
        getClient: getClientRoom
    }
}
