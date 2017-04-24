package com.ticketone.service.impl;

import com.ticketone.service.WebSocketService;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class WebSocketServiceImpl implements WebSocketService {

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void broadcastNewRoom(WebSocketSession wsSession, String room) {
        try {
            wsSession.sendMessage(new TextMessage("new room " + room));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void broadcastNewMessage(WebSocketSession wsSession, String room) {
        try {
            wsSession.sendMessage(new TextMessage("new message on " + room));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void addSession(WebSocketSession webSocketSession) {
        sessions.add(webSocketSession);
    }

    @Override
    public void broadcastNewRoomToAllUsers(String roomName) {
        for (WebSocketSession webSocketSes : sessions) {
            broadcastNewRoom(webSocketSes, roomName);
        }
    }
}
