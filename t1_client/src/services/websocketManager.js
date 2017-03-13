const WS_PREFIX = "wss://";

class WebsocketManager {
    constructor(count) {
        this.connections = {};
    }
    initNewConnection(addr, openCallback, messageCallback, errorCallback) {
        let newConnection = new WebSocket(WS_PREFIX + addr);
        newConnection.onopen = (e) => { openCallback(e) };
        newConnection.onmessage = (e) => { messageCallback(JSON.parse(e.data)) };
        newConnection.onerror = (e) => { errorCallback(e) };
        this.connections[addr] = newConnection;
    }
    killConnection(addr) {
        this.connections[addr].close();
        delete this.connections[addr];
    }
    sendOnChannel(addr, message) {
        this.connections[addr].send(message);
    }
}

export const websocketManager = new WebsocketManager();
