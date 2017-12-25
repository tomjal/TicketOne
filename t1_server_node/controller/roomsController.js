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
            const listOfRooms = inMemoryStorage.getAllOpenRooms()
            res.status(200).json(listOfRooms)
        } catch (e) {
            handleError(e)
        }
    })
    .get('/client/:clientId', (req, res) => {
        try {
            const listOfRooms = inMemoryStorage.getAllClientsRooms(req.params.clientId)
            console.log("get client rooms")
            console.log(listOfRooms)
            res.status(200).json(listOfRooms)
        } catch (e) {
            handleError(e)
        }
    })
    .post('/new', (req, res) => {
        const clientId = req.body.clientId
        const roomTopic = req.body.roomTopic

        if (typeof clientId === undefined ||
            typeof roomTopic === undefined ) {
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
            console.log(newRoom.id)
            wsService.broadcastNewRoom(newRoom.id)
        } catch (e) {
            handleError(e)
        }
    })
    .put('/:id', (req, res) => {
        const roomId = req.params.id;
        const isSolved = req.body.solved
        try {
            inMemoryStorage.updateSolvedSatus(roomId, isSolved)
            res.status(200).json({ status: CONSTS.STATUS.OK })
            // inform subscribers
            console.log(roomId)
            wsService.broadcastNewRoom(roomId)
        } catch (e) {
            handleError(e)
        }
    })
    .get('/messages', (req, res) => {
        try {
            const listOfAllMessages = inMemoryStorage.getAllMessages()
            res.status(200).json(listOfAllMessages)
        } catch (e) {
            handleError(e)
        }
    })
    .get('/:id/messages', (req, res) => {
        try {
            const roomId = req.params.id
            const listOfMessagesById = inMemoryStorage.getAllMessagesByRoomId(roomId)
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