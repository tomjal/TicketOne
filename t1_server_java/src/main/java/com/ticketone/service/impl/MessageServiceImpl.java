package com.ticketone.service.impl;

import com.ticketone.controller.converter.MessageSaveConverterImpl;
import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import com.ticketone.model.repository.MessageRepository;
import com.ticketone.model.repository.RoomRepository;
import com.ticketone.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public List<Message> findAll() {

        List<Message> newList = new ArrayList<Message>();
        List<Room> allRooms = roomRepository.findAll();
        for (Room room : allRooms) {
            for (Message message : room.getMessages()) {
                // flatten list
                newList.add(message);
            }
        }
        return newList;
    }
}
