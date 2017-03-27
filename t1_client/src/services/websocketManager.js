const WS_PREFIX = "ws://";

class WebsocketManager {
    constructor(count) {
        this.connection = null;
    }
    initNewConnection(addr, openCallback, messageCallback, errorCallback) {
        if (!this.connections) {
            let newConnection = new WebSocket(WS_PREFIX + addr);
            newConnection.onopen = (e) => { openCallback(e) };
            newConnection.onmessage = (e) => { messageCallback(e) };
            newConnection.onerror = (e) => { errorCallback(e) };
            this.connection = newConnection;
        }
    }
    killConnection(addr) {
        this.connection.close();
        this.connection = null;
    }
    batchSubscribe(channelsList, role, id) {
        if (role === "client") {
            this.sendOnChannel(
                role + ":" + id + "|"
            )
        }
        if (role === "employee") { }
    }
    sendOnChannel(message) {
        this.connection.send(message);
    }
}

export const websocketManager = new WebsocketManager();
