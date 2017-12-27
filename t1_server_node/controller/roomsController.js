const logger = require('logger').createLogger()
const express = require('express')

const CONSTS = require('./../const/consts')
const inMemoryStorage = require('./../mock/inMemoryStorage')
const wsService = require('./../service/wsService')

const roomsController = express.Router()

// helpers ===========================================================
function handleError(e) {
    logger.error(e);
    res.status(500).json({ error: e.message })
}

// REST API ==========================================================
roomsController
    // == Rooms
    .get('/', (req, res) => {
        try {
            const listOfRooms = inMemoryStorage.getAllRooms()
            res.status(200).json(listOfRooms)
        } catch (e) {
            handleError(e)
        }
    })
    .get('/open', (req, res) => {
        try {
            const listOfRooms = inMemoryStorage.getOpenRooms()
            res.status(200).json(listOfRooms)
        } catch (e) {
            handleError(e)
        }
    })
    .get('/client/:clientId', (req, res) => {
        try {
            const listOfRooms = inMemoryStorage.getClientsRooms(req.params.clientId)
            res.status(200).json(listOfRooms)
        } catch (e) {
            handleError(e)
        }
    })
    .post('/new', (req, res) => {
        const clientId = req.body.clientId
        const roomTopic = req.body.roomTopic

        if (typeof clientId === undefined ||
            typeof roomTopic === undefined) {
            res.status(400).json({ status: CONSTS.STATUS.BAD_REQUEST })
        }

        // create new room
        const newRoom = {
            roomTopic: roomTopic,
            clientId: clientId,
            isOpened: true,
            subscribers: [],
            messages: [],
            id: new Date().getTime()
        };

        try {
            // push room to storage
            inMemoryStorage.addRoom(newRoom)
            res.status(200).json({ status: CONSTS.STATUS.OK })
            // inform subscribers
            wsService.broadcastNewRoom(newRoom.id)
        } catch (e) {
            handleError(e)
        }
    })
    .put('/:id', (req, res) => {
        const roomId = req.params.id;
        const isSolved = req.body.solved
        try {
            inMemoryStorage.updateRoomSolvedSatus(roomId, isSolved)
            res.status(200).json({ status: CONSTS.STATUS.OK })
            // inform subscribers
            wsService.broadcastNewRoom(roomId)
        } catch (e) {
            handleError(e)
        }
    })
    // == Rooms == Messages controller
    .put('/roomsIdsListView/messages', (req, res) => {
        try {
            const roomsIdsList = req.body.roomsIdsList;
            const messagesList = inMemoryStorage.getMessagesByRoomsIdsList(roomsIdsList);
            res.status(200).json(messagesList)
        } catch (e) {
            handleError(e)
        }
    })
    .get('/:id/messages', (req, res) => {
        try {
            const roomId = req.params.id
            const listOfMessagesById = inMemoryStorage.getMessagesByRoomId(roomId)
            res.status(200).json(listOfMessagesById)
        } catch (e) {
            handleError(e)
        }
    })
    .post('/:id/messages', (req, res) => {
        const message = req.body.message
        const senderId = req.body.senderId
        const senderRole = req.body.senderRole
        const roomId = req.params.id

        if (typeof message === undefined ||
            typeof senderId === undefined ||
            typeof senderRole === undefined ||
            typeof roomId === undefined) {
            res.status(400).json({ status: CONSTS.STATUS.BAD_REQUEST })
        }

        // create new message
        const newMessage = {
            body: message,
            author: { id: senderId, role: senderRole },
            timestamp: new Date().getTime()
        };

        try {
            // push message to storage
            inMemoryStorage.addMessage(roomId, newMessage)
            res.status(200).json({ status: CONSTS.STATUS.OK })
            // inform subscribers
            wsService.broadcastNewMessage(roomId)
        } catch (e) {
            handleError(e)
        }
    })

module.exports = roomsController;