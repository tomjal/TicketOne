package com.ticketone.service;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;

import java.util.List;

public interface MessageService {
    List<Message> findAll();

    List<Message> findByRoom(Long roomId);

    List<Message> findByRooms(List<Long> roomIds);
    
    Message save(MessageSaveDTO messageSaveDTO);
}
