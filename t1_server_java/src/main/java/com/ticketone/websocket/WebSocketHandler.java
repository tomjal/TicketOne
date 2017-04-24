package com.ticketone.websocket;

import com.ticketone.service.WebSocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class WebSocketHandler extends TextWebSocketHandler {

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Autowired
    WebSocketService webSocketService;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message)
            throws InterruptedException, IOException {

        String messageString = message.getPayload();
        String[] messageTokens = messageString.split(":");
        String command = messageTokens[0];
        String room = messageTokens[1];

        if (command.equals(WebSocketCommands.NEW_ROOM.toString())) {
            broadcastNewRoomToAllUsers(room);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        sessions.add(session);
    }

    public void broadcastNewRoomToAllUsers(String roomName) {
        for (WebSocketSession webSocketSession : sessions) {
            webSocketService.broadcastNewRoom(webSocketSession, roomName);
        }
    }
}
