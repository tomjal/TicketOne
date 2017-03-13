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

function postAuthLogin(login, pass) {
    const authObject = { login: login, pass: pass};
    return fetch(apiPrefix + apiURIs.AUTH, buildReqOptions(httpVerbs.POST, authObject));
}

function getMessagesAll() {
    return fetch(apiPrefix + apiURIs.MESSAGES + "/all", buildReqOptions(httpVerbs.GET));
}

function getRoomsAll() {
    return fetch(apiPrefix + apiURIs.ROOMS + "/all", buildReqOptions(httpVerbs.GET));
}

export const apiSchema = {
    context: {
        get: getAuthContext
    },
    auth: {
        post: postAuthLogin
    },
    messages: {
        getAll: getMessagesAll
    },
    rooms: {
        getAll: getRoomsAll
    }
}
