package com.ticketone.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.ticketone.controller.converter.MessageSaveConverterImpl;
import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import com.ticketone.model.repository.MessageRepository;
import com.ticketone.model.repository.RoomRepository;
import com.ticketone.service.MessageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {
    //@Autowired
    //private MessageRepository messageRepository;
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public List<Message> findByRoom(Long roomId) {
        Room room = roomRepository.findOne(roomId);
        return room.getMessages();
    }

    /*@Override
    public List<Message> findByRooms(List<Long> roomIds) {
        // Stream API probably should be used here, flatten
        List<Message> list = new ArrayList<Message>();
        for (Long roomId : roomIds) {
            List<Message> tempList = findByRoom(roomId);
            for (Message message : tempList) {
                list.add(message);
            }
        }
        return list;
    }

    @Override
    public Message save(MessageSaveDTO messageSaveDTO) {
        Room room = roomRepository.findOne(messageSaveDTO.getRoomId());
        Message message = new MessageSaveConverterImpl().fromDto(messageSaveDTO, room);
        return messageRepository.save(message);
    }*/
}
