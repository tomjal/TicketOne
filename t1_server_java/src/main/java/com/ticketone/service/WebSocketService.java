package com.ticketone.service;

import org.springframework.web.socket.WebSocketSession;

public interface WebSocketService {
    void broadcastNewRoom(WebSocketSession wsSession, String room);

    void broadcastNewMessage(WebSocketSession wsSession, String room);
}
