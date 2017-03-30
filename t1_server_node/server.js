const WebSocketServer = require("ws").Server
const http = require("http")
const bodyParser = require('body-parser')
const express = require("express")

const app = express()
let port = process.env.PORT || 8080

app.use(express.static(__dirname + "/react_build/"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const server = http.createServer(app)
server.listen(port)

const router = express.Router();

const ROLES = {
    CLIENT: "client",
    EMPLOYEE: "employee",
}

const COMMANDS = {
    NEW_MESSAGE: "new_message",
    NEW_ROOM: "new_room",
};

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

// map - in-memory storage
let currentlyOpenedRooms = {};

// rest api
router.get('/rooms', function (req, res) {
    let listOfRooms = Object.keys(currentlyOpenedRooms);
    res.json(listOfRooms);
});

router.get('/rooms/messages', function (req, res) {
    let listOfAllMessages = {};
    let listOfRooms = Object.keys(currentlyOpenedRooms);
    listOfRooms.forEach(function (room) {
        listOfAllMessages[room] = currentlyOpenedRooms[room].messages;
    })
    res.json(listOfAllMessages);
});

router.get('/rooms/:id/messages', function (req, res) {
    let room = req.params.id;
    let messagesById = [];
    if (currentlyOpenedRooms[room]) {
        messagesById = currentlyOpenedRooms[room].messages;
    }
    res.json(messagesById);
});

router.post('/rooms/:id/messages', function (req, res) {
    let message = req.body.message;
    let senderId = req.body.senderId;
    let senderRole = req.body.senderRole;
    let room = req.params.id;

    // server timestamp
    let newMessage = { body: message, author: { id: senderId, role: senderRole }, timestamp: Date.now() };

    // push message to storage
    if (currentlyOpenedRooms[room]) {
        currentlyOpenedRooms[room].messages.push(newMessage);
    }
    res.status(200).json({ status: "ok" });

    // inform subscribers
    wss.clients.forEach((client) => {
        client.send(COMMANDS.NEW_MESSAGE + ":" + room);
    });
});

// rest prefix
app.use('/api/v1', router);

console.log("http server listening on %d", port)

// websocket server
const wss = new WebSocketServer({ server: server })

console.log("websocket server created")

// websocket handlers
wss.on("connection", function (conn) {
    console.log("websocket connection open")

    conn.on("message", function (message) {

        // message command parser
        let commandsList = message.split("|");
        let role = commandsList[0].split(":")[0];
        let userId = commandsList[0].split(":")[1]; // chatroom id

        // logic for client
        if (role === ROLES.CLIENT) {

            // if room does not exist, create
            if (!currentlyOpenedRooms[userId]) {
                let newRoom = { subscribers: [], messages: [] };
                currentlyOpenedRooms[userId] = newRoom;

                console.log("websocket new room created")

                // inform everyone about new room
                wss.clients.forEach((client) => {
                    client.send(COMMANDS.NEW_ROOM + ":" + userId);
                });
            }
        }
    })
    conn.on("close", function () {
        console.log("websocket connection close")
    })
})