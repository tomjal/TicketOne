const CONSTS = require('./consts');

class WsService {
    constructor(logger) {
        this.logger = logger;
    }

    isClient(role) {
        return role === CONSTS.ROLES.CLIENT;
    }

    broadcastNewMessage(wss, roomId) {
        wss.clients.forEach(client => {
            client.send(CONSTS.COMMANDS.NEW_MESSAGE + CONSTS.SEPARATORS.MES + roomId);
        });
    }

    broadcastNewRoom(wss, roomId) {
        wss.clients.forEach(client => {
            client.send(CONSTS.COMMANDS.NEW_ROOM + CONSTS.SEPARATORS.MES + roomId);
        });
    }

    handleNewWsMessage(wss, storage, message) {

        // message command parser
        const commandsList = message.split(CONSTS.SEPARATORS.COM);
        const role = commandsList[0].split(CONSTS.SEPARATORS.MES)[0];
        const userId = commandsList[0].split(CONSTS.SEPARATORS.MES)[1]; // chatroom id

        // logic for client
        if (this.isClient(role)) {
            // if room does not exist, create
            if (!storage.hasRoom(userId)) {
                storage.addRoom(userId);
                this.logger.info('websocket new room created');
                // inform everyone about new room
                this.broadcastNewRoom(wss, userId);
            }
        }
    }
}

module.exports = WsService;