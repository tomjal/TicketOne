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

import java.util.Collection;
import java.util.List;

@Service
public class JpaMessageServiceImpl {
    /*@Autowired
    private MessageRepository messageRepository;
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public List<Message> findAll() {
        return messageRepository.findAll();
    }

    @Override
    public Message save(MessageSaveDTO messageSaveDTO) {
        Room room = roomRepository.findByName(messageSaveDTO.getRoomName());
        Message message = new MessageSaveConverterImpl().fromDto(messageSaveDTO, room);

        return messageRepository.save(message);
    }

    @Override
    public Collection<Message> findByRoomName(String roomName) {
        return messageRepository.findByRoomName(roomName);
    }*/
}
