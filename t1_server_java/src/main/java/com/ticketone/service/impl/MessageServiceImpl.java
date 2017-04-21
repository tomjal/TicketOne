package com.ticketone.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import com.ticketone.model.repository.MessageRepository;
import com.ticketone.service.MessageService;

import java.util.Collection;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Override
    public Message save(Message message) {
        return null;
    }

    @Override
    public Collection<Message> findByRoom(Room room) {
        return null;
    }
}
