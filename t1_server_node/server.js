const WebSocketServer = require('ws').Server
const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('logger').createLogger()

const router = express.Router()
const app = express()
const port = process.env.PORT || 8080

const CONSTS = require('./server/consts')
const InMemoryStorage = require('./server/inMemoryStorage')
const WsService = require('./server/wsService')

app.use(express.static(__dirname + '/react_build/'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// REST prefix
app.use('/api/v1', router)

const server = http.createServer(app)
server.listen(port)

// error handling
function handleError(e) {
    logger.error(e);
    res.status(500).json({ error: e.message })
}

// WS service
const wsService = new WsService(logger)

// storage
const inMemoryStorage = new InMemoryStorage()

// API REST
router.get('/rooms', (req, res) => {
    try {
        const listOfRooms = inMemoryStorage.getAllRooms()
        res.status(200).json(listOfRooms)
    } catch (e) {
        handleError(e)
    }
})

router.get('/rooms/messages', (req, res) => {
    try {
        const listOfAllMessages = inMemoryStorage.getAllMessages()
        res.status(200).json(listOfAllMessages)
    } catch (e) {
        handleError(e)
    }
})

router.get('/rooms/:id/messages', (req, res) => {
    try {
        const roomId = req.params.id
        const listOfMessagesById = inMemoryStorage.getAllMessagesByRoomId(roomId)
        res.status(200).json(listOfMessagesById)
    } catch (e) {
        handleError(e)
    }
})

router.post('/rooms/:id/messages', (req, res) => {
    const message = req.body.message
    const senderId = req.body.senderId
    const senderRole = req.body.senderRole
    const roomId = req.params.id
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
        wsService.broadcastNewMessage(wss, roomId)
    } catch (e) {
        handleError(e)
    }
})

// reset mock storage - just for testing purpose
router.get('/reset', (req, res) => {
    try {
        inMemoryStorage.clearMemory()
        res.status(200).json({ status: CONSTS.STATUS.OK })
    } catch (e) {
        handleError(e)
    }
})

logger.info('http server listening on', port)

// WS server
const wss = new WebSocketServer({ server: server })
logger.info('websocket server created')

// WS handlers
wss.on('connection', connection => {
    logger.info('websocket connection open')

    connection.on("message", message => {
        try {
            wsService.handleNewWsMessage(wss, inMemoryStorage, message)
        } catch (e) {
            logger.error(e.message)
        }
    })

    connection.on('close', () => {
        logger.info('websocket connection close')
    })
})
