const CONSTS = require('./../const/consts')
const logger = require('logger').createLogger()

class WsService {
    constructor(logger) {
        this.logger = logger;
        this.wsServer = null;
    }

    setWsServer(wsServer) {
        this.wsServer = wsServer;
    }

    isClient(role) {
        return role === CONSTS.ROLES.CLIENT;
    }

    broadcastNewMessage(roomId) {
        this.wsServer.clients.forEach(client => {
            client.send(CONSTS.COMMANDS.NEW_MESSAGE + CONSTS.SEPARATORS.MES + roomId);
        });
    }

    broadcastNewRoom(roomId) {
        this.wsServer.clients.forEach(client => {
            client.send(CONSTS.COMMANDS.NEW_ROOM + CONSTS.SEPARATORS.MES + roomId);
        });
    }
}

module.exports = new WsService(logger);