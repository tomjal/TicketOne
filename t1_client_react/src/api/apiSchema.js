import { httpVerbs, buildReqOptions } from "./apiFetchHelpers";

const apiPrefix = "/api/v1";

const apiURIs = {
    MESSAGES: "/messages",
    ROOMS: "/rooms",
    CONTEXT: "/context",
    AUTH: "/login",
    STATS: "/stats"
}

const apiWords = {
    ROOM: "/room/",
    client: "/client/"
}

function getAuthContext() {
    return fetch(apiPrefix + apiURIs.CONTEXT, buildReqOptions(httpVerbs.GET));
}

function postAuthData(login, pass) {
    const authObject = { login: login, pass: pass };
    return fetch(apiPrefix + apiURIs.AUTH, buildReqOptions(httpVerbs.POST, authObject));
}

function getMessagesByRooms(roomsIdsList) {
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + apiURIs.MESSAGES + "/byRoomsIdsList",
        buildReqOptions(httpVerbs.PUT, { roomsIdsList: roomsIdsList }));
}

function getMessagesByRoom(roomId) {
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + roomId + apiURIs.MESSAGES,
        buildReqOptions(httpVerbs.GET));
}

function postMessageToRoom(message, roomId, senderRole, senderId) {
    const messageData = { message: message, senderRole: senderRole, senderId: senderId };
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + roomId + apiURIs.MESSAGES,
        buildReqOptions(httpVerbs.POST, messageData));
}

function getRoomsStats() {
    return fetch(apiPrefix + apiURIs.ROOMS + "/stats", buildReqOptions(httpVerbs.GET));
}

function getAllOpenRoomsIds() {
    return fetch(apiPrefix + apiURIs.ROOMS + "/open", buildReqOptions(httpVerbs.GET));
}

function getClientRoomsIds(clientId) {
    return fetch(apiPrefix + apiURIs.ROOMS + apiWords.client + clientId, buildReqOptions(httpVerbs.GET));
}

//todo
function postClientRoom(clientId, roomTopic) {
    const newRoomData = { clientId: clientId, roomTopic: roomTopic };
    return fetch(apiPrefix + apiURIs.ROOMS + "/new",
        buildReqOptions(httpVerbs.POST, newRoomData));
}

function putMarkRoomAsResolved(roomId) {
    const roomSolvedData = { solved: true };
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + roomId,
        buildReqOptions(httpVerbs.PUT, roomSolvedData));
}

function putMarkRoomAsUnresolved(roomId) {
    const roomSolvedData = { solved: false };
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + roomId,
        buildReqOptions(httpVerbs.PUT, roomSolvedData));
}

function getGlobalSolvedUnsolvedStats() {
    return fetch(apiPrefix + apiURIs.STATS + "/employee",
        buildReqOptions(httpVerbs.GET));
}

export const apiSchema = {
    context: {
        get: getAuthContext
    },
    auth: {
        post: postAuthData
    },
    messages: {
        getByRooms: getMessagesByRooms,
        getByRoom: getMessagesByRoom,
        post: postMessageToRoom
    },
    rooms: {
        getRoomsStats: getRoomsStats,
        getAllOpenRoomsIds: getAllOpenRoomsIds,
        getClientRoomsIds: getClientRoomsIds,
        postClientRoom: postClientRoom,
        putMarkRoomAsResolved: putMarkRoomAsResolved,
        putMarkRoomAsUnresolved: putMarkRoomAsUnresolved
    },
    stats: {
        getGlobalSolvedUnsolvedStats: getGlobalSolvedUnsolvedStats
    }
}
