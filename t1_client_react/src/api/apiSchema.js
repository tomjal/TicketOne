import { httpVerbs, buildReqOptions } from "./apiFetchHelpers";

const apiPrefix = "/api/v1";

const apiURIs = {
    MESSAGES: "/messages",
    ROOMS: "/rooms",
    CONTEXT: "/context",
    AUTH: "/login"
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
    return fetch(apiPrefix + apiURIs.ROOMS + "/" + apiURIs.MESSAGES,
        buildReqOptions(httpVerbs.GET, { roomsIdsList: roomsIdsList }));
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

function getClientRoomDetails(clientId, roomId) {
    return fetch(apiPrefix + apiURIs.ROOMS + apiWords.client + clientId + apiWords.ROOM + roomId,
        buildReqOptions(httpVerbs.GET));
}

function postClientRoom(clientId, roomTopic) {
    const newRoomData = { clientId: clientId, roomTopic: roomTopic };
    return fetch(apiPrefix + apiURIs.ROOMS + apiWords.client + "new",
        buildReqOptions(httpVerbs.POST, newRoomData));
}

function putClientRoomSolved(clientId, roomId, isSolved) {
    const roomSolvedData = { solved: isSolved };
    return fetch(apiPrefix + apiURIs.ROOMS + apiWords.client + clientId + apiWords.ROOM + roomId,
        buildReqOptions(httpVerbs.PUT, roomSolvedData));
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
        post: postMessageToRoom
    },
    rooms: {
        getRoomsStats: getRoomsStats,
        getAllOpenRoomsIds: getAllOpenRoomsIds,
        getClientRoomsIds: getClientRoomsIds,
        postClientRoom: postClientRoom,
        putClientRoomSolved: putClientRoomSolved
    }
}
