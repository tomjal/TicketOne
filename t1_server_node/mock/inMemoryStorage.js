// Fake main storage/data service, using simple javascript map

class InMemoryStorage {
    constructor() {
        this.innerMap = {};
    }
    // == Stats
    getSolvedUnsolvedStats() {
        let statsObj = { solved: 0, unsolved: 0 };
        const newMap = Object.keys(this.innerMap);
        newMap.forEach(roomId => {
            if (this.innerMap[roomId].isSolved !== undefined) {
                if (this.innerMap[roomId].isSolved === true) {
                    statsObj.solved++;
                }
                if (this.innerMap[roomId].isSolved === false) {
                    statsObj.unsolved++;
                }
            }
        })
        return statsObj;
    }
    // == Rooms
    getAllRooms() {
        const newMap = Object.keys(this.innerMap);
        const all = [];
        newMap.forEach(roomId => {
            all.push(this.innerMap[roomId])
        })
        return all;
    }
    getOpenRooms() {
        const newMap = Object.keys(this.innerMap);
        const areOpened = [];
        newMap.forEach(roomId => {
            if (this.innerMap[roomId].isOpened == true)
                areOpened.push(this.innerMap[roomId])
        })
        return areOpened;
    }
    getClientRooms(clientId) {
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
    updateRoomSolvedSatus(roomId, solved) {
        this.innerMap[roomId].isSolved = solved;
        this.markRoomAsClosed(roomId);
    }
    markRoomAsClosed(roomId) {
        this.innerMap[roomId].isOpened = false;
    }
    hasRoom(roomId) {
        return this.innerMap[roomId] ? true : false;
    }
    // == Messages
    getMessagesByRoomId(roomId) {
        let messagesById = [];
        if (this.innerMap[roomId]) {
            messagesById = this.innerMap[roomId].messages;
        }
        return messagesById;
    }
    getMessagesByRoomsIdsList(roomsList) {
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
    // == Util
    clearMemory() {
        this.innerMap = {};
    }
}

module.exports = new InMemoryStorage();