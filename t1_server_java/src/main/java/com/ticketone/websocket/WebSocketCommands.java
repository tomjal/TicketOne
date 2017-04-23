package com.ticketone.websocket;

public enum WebSocketCommands {
    NEW_MESSAGE("new_message"),
    NEW_ROOM("new_room");

    private final String command;

    WebSocketCommands(String command) {
        this.command = command;
    }

    @Override
    public String toString() {
        return command;
    }
}
