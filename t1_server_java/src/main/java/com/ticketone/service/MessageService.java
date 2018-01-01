package com.ticketone.service;

import java.util.List;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;

public interface MessageService {
    List<Message> findByRoom(Long roomId);

    List<Message> findByRooms(List<Long> roomIds);

    Message save(MessageSaveDTO messageSaveDTO);
}
