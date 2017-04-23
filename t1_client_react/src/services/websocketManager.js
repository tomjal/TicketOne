class WebsocketManager {
    constructor(count) {
        this.connection = null;
    }
    initNewConnection(addr, openCallback, messageCallback, errorCallback) {
        if (!this.connections) {
            let newConnection = new WebSocket(addr);
            newConnection.onopen = e => openCallback(e);
            newConnection.onmessage = e => messageCallback(e);
            newConnection.onerror = e => errorCallback(e);
            this.connection = newConnection;
        }
    }
    killConnection(addr) {
        this.connection.close();
        this.connection = null;
    }
    createChannel(role, id) {
        this.sendOnChannel(
            `${role}:${id}|`
        )
    }
    sendOnChannel(message) {
        this.connection.send(message);
    }
}

export const websocketManager = new WebsocketManager();
