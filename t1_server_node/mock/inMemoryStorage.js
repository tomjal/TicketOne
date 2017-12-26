class InMemoryStorage {
    constructor() {
        this.innerMap = {};
    }
    getAllRooms() {
        const newMap = Object.keys(this.innerMap);
        const all = [];
        newMap.forEach(roomId => {
            all.push(this.innerMap[roomId])
        })
        return all;
    }
    getAllOpenRooms() {
        const newMap = Object.keys(this.innerMap);
        const areOpened = [];
        newMap.forEach(roomId => {
            if (this.innerMap[roomId].isOpened == true)
                areOpened.push(this.innerMap[roomId])
        })
        return areOpened;
    }
    getAllClientsRooms(clientId) {
        const newMap = Object.keys(this.innerMap);
        const listFilteredByClientId = [];
        newMap.forEach(roomId => {
            if (this.innerMap[roomId].clientId == clientId)
                listFilteredByClientId.push(this.innerMap[roomId])
        })
        return listFilteredByClientId
    }
    addRoom(newRoom) {
        this.innerMap[newRoom.id] = newRoom;
    }
    updateSolvedSatus(roomId, solved) {
        this.innerMap[roomId].isSolved = solved;
        this.markRoomAsClosed(roomId);
    }
    markRoomAsClosed(roomId) {
        this.innerMap[roomId].isOpened = false;
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
    getAllMessagesByRoomsList(roomsList) {
        let messagesList = {};
        roomsList.forEach(roomId => {
            if (this.innerMap[roomId]) {
                messagesList[roomId] = this.innerMap[roomId].messages;
            }
        })
        return messagesList;
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

module.exports = new InMemoryStorage();