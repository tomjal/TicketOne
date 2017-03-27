var WebSocketServer = require("ws").Server
var http = require("http")
var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/react_build/"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app)
server.listen(port)

var router = express.Router();

const COMMANDS = {
    CLIENT: "client",
    EMPLOYEE: "employee",
    REGISTER: "register",
    CREATE_ROOM: "create_room",
    JOIN_ROOM: "join_room",
    LEAVE_ROOM: "leave_room"
};

let currentlyOpenedRooms = {};

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

router.get('/rooms/all', function (req, res) {
    let listOfRooms = [];
    for (let room in currentlyOpenedRooms) {
        if (currentlyOpenedRooms.hasOwnProperty(room)) {
            if (currentlyOpenedRooms[room] !== null) {
                listOfRooms.push(room)
            }
        }
    }
    res.json(listOfRooms);
});

router.get('/rooms/all/messages', function (req, res) {
    console.log("/rooms/all/messages");
    let listOfAllMessages = {};
    for (let room in currentlyOpenedRooms) {
        if (currentlyOpenedRooms.hasOwnProperty(room)) {
            listOfAllMessages[room] = currentlyOpenedRooms[room].messages;
        }
    }
    res.json(listOfAllMessages);
});

router.post('/rooms/all/messages', function (req, res) {
    let listOfMessages = [];
    res.json(listOfMessages);
});

router.get('/rooms/:id/messages', function (req, res) {
    let channel = req.params.id;
    res.json(currentlyOpenedRooms[channel].messages);
});

router.post('/rooms/:id/messages', function (req, res) {
    console.log("/rooms/:id/messages");
    let message = req.body.message;
    let senderId = req.body.senderId;
    let senderRole = req.body.senderRole;
    let channel = req.params.id;
    //let listOfMessages = [];
    let newMessage = { body: message, author: { id: senderId, role: senderRole }, timestamp: Date.now() };
    if (currentlyOpenedRooms[channel]) {
        currentlyOpenedRooms[channel].messages.push(newMessage);
    }

    //{ message: message, senderRole: senderRole, senderId: senderId };
    res.send(200);

    wss.clients.forEach((client) => {
        client.send("new_message:" + channel);
    });
});

app.use('/api/v1', router);

console.log("http server listening on %d", port)

const wss = new WebSocketServer({ server: server })
console.log("websocket server created")

wss.on("connection", function (conn) {
    console.log("websocket connection open")

    conn.on("message", function (message, client) {
        console.log(message)
        let commandsList = message.split("|");
        let role = commandsList[0].split(":")[0];
        let userId = commandsList[0].split(":")[1];

        //logic for client
        if (role === "client") {
            //if room does not exist - create
            if (!currentlyOpenedRooms[userId]) {
                let newRoom = { subscribers: [], messages: [] };
                currentlyOpenedRooms[userId] = newRoom;

                console.log("websocket new room created")
                //subscribe everyone
                wss.clients.forEach((client) => {
                    client.send("new_room:" + userId);
                });
            }
            //subscribe self to room if not subscribed yet
            if (currentlyOpenedRooms[userId].subscribers.indexOf(userId) === -1) {
                currentlyOpenedRooms[userId].subscribers.push(userId);
            }
        }

        //logic for employee
        if (role === "employee") {
        }
    })
    conn.on("close", function (client) {
        console.log("websocket connection close - " + client)
    })
})