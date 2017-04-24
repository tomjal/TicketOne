package com.ticketone.websocket;

import com.ticketone.service.WebSocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Component
public class WebSocketHandler extends TextWebSocketHandler {

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
            webSocketService.broadcastNewRoomToAllUsers(room);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        webSocketService.addSession(session);
    }
}
