const WebSocketServer = require('ws').Server
const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('logger').createLogger();

const router = express.Router()
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/react_build/'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// REST prefix
app.use('/api/v1', router)

const server = http.createServer(app)
server.listen(port)

// consts
const ROLES = {
    CLIENT: 'client',
    EMPLOYEE: 'employee',
}

const COMMANDS = {
    NEW_MESSAGE: 'new_message',
    NEW_ROOM: 'new_room'
}

const STATUS = {
    OK: 'ok'
}

const SEPARATORS = {
    MES: ':',
    COM: '|'
}

// error handling
function handleError(res, reason, message, code) {
    logger.error(reason);
    res.status(code || 500).json({ error: message });
}

// in-memory storage
class InMemoryStorage {
    constructor() {
        this.innerMap = {};
    }
    getAllRooms() {
        return Object.keys(this.innerMap);
    }
    addRoom(roomId) {
        const newRoom = { subscribers: [], messages: [] };
        this.innerMap[roomId] = newRoom;
    }
    hasRoom(roomId) {
        return this.innerMap[roomId] ? true : false;
    }
    getAllMessages() {
        const listOfRooms = this.getAllRooms();
        let listOfAllMessages = {};
        listOfRooms.forEach(roomId => {
            listOfAllMessages[roomId] = this.innerMap[roomId].messages;
        })
        return listOfAllMessages;
    }
    getAllMessagesByRoomId(roomId) {
        let messagesById = [];
        if (this.innerMap[roomId]) {
            messagesById = this.innerMap[roomId].messages;
        }
        return messagesById;
    }
    addMessage(roomId, message) {
        if (this.hasRoom(roomId)) {
            this.innerMap[roomId].messages.push(message);
        }
    }
    clearMemory() {
        this.innerMap = {};
    }
}

const inMemoryStorage = new InMemoryStorage();

// roles service
function isClient(role) {
    return role === ROLES.CLIENT;
}

// WS service
function broadcastNewMessage(roomId) {
    wss.clients.forEach(client => {
        client.send(COMMANDS.NEW_MESSAGE + SEPARATORS.MES + roomId);
    });
}

function broadcastNewRoom(roomId) {
    wss.clients.forEach(client => {
        client.send(COMMANDS.NEW_ROOM + SEPARATORS.MES + roomId);
    });
}

function handleNewWsMessage(message) {

    // message command parser
    const commandsList = message.split(SEPARATORS.COM);
    const role = commandsList[0].split(SEPARATORS.MES)[0];
    const userId = commandsList[0].split(SEPARATORS.MES)[1]; // chatroom id

    // logic for client
    if (isClient(role)) {
        // if room does not exist, create
        if (!inMemoryStorage.hasRoom(userId)) {
            inMemoryStorage.addRoom(userId);
            logger.info('websocket new room created');
            // inform everyone about new room
            broadcastNewRoom(userId);
        }
    }
}

// API REST
router.get('/rooms', (req, res) => {
    const listOfRooms = inMemoryStorage.getAllRooms();
    res.status(200).json(listOfRooms);
})

router.get('/rooms/messages', (req, res) => {
    const listOfAllMessages = inMemoryStorage.getAllMessages();
    res.status(200).json(listOfAllMessages);
})

router.get('/rooms/:id/messages', (req, res) => {
    const roomId = req.params.id;
    const listOfMessagesById = inMemoryStorage.getAllMessagesByRoomId(roomId);
    res.status(200).json(listOfMessagesById);
})

router.post('/rooms/:id/messages', (req, res) => {
    const message = req.body.message;
    const senderId = req.body.senderId;
    const senderRole = req.body.senderRole;
    const roomId = req.params.id;

    // create new message
    const newMessage = {
        body: message,
        author: { id: senderId, role: senderRole },
        timestamp: new Date().getTime()
    };

    // push message to storage
    inMemoryStorage.addMessage(roomId, newMessage);
    res.status(200).json({ status: STATUS.OK });

    // inform subscribers
    broadcastNewMessage(roomId);
})

// reset mock storage - just for testing purpose
router.get('/reset', (req, res) => {
    inMemoryStorage.clearMemory();
    res.status(200).json({ status: STATUS.OK });
})

logger.info('http server listening on', port);

// WS server
const wss = new WebSocketServer({ server: server })
logger.info('websocket server created');

// WS handlers
wss.on('connection', connection => {
    logger.info('websocket connection open');

    connection.on("message", message => {
        handleNewWsMessage(message);
    })

    connection.on('close', () => {
        logger.info('websocket connection close');
    })
})
