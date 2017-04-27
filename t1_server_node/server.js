// import & setup =====================================================
const CONSTS = require('./const/consts')

const WebSocketServer = require('ws').Server,
    http = require('http'),
    bodyParser = require('body-parser'),
    express = require('express'),
    compression = require('compression'),
    logger = require('logger').createLogger();

const app = express(),
    port = process.env.PORT || 8080

app.use(compression())
    .use(express.static(__dirname + '/react_build/'))

app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())

const inMemoryStorage = require('./mock/inMemoryStorage')
const wsService = require('./service/wsService')

// run server ========================================================
const server = http.createServer(app)
server.listen(port)
const wsServer = new WebSocketServer({ server: server })
wsService.setWsServer(wsServer)

logger.info('server listening on', port)

// REST API router ===================================================
const roomPrefix = '/rooms';
const roomsController = require('./controller/roomsController')

app.get(CONSTS.API_PREFIX.V1, (req, res) => {
    res.send('REST API ' + CONSTS.API_PREFIX.V1);
});

app.use(CONSTS.API_PREFIX.V1 + roomPrefix, roomsController)

// WS handler ========================================================
wsServer.on('connection', connection => {
    logger.info('websocket connection open')
    connection.on("message", message => {
        try {
            wsService.handleNewWsMessage(inMemoryStorage, message)
        } catch (e) {
            logger.error(e.message)
        }
    })
    connection.on('close', () => {
        logger.info('websocket connection close')
    })
})