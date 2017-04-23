package com.ticketone.service.impl;

import com.ticketone.service.WebSocketService;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Service
public class WebSocketServiceImpl implements WebSocketService {
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
}
