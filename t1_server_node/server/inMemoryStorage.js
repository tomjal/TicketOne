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

module.exports = InMemoryStorage;