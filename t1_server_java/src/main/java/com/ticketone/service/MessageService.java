package com.ticketone.service;

import java.util.Collection;

import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;

public interface MessageService {
	Message save(Message message);
	Collection<Message> findByRoom(Room room);
}
