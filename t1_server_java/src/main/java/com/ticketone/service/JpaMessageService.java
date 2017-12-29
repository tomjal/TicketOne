package com.ticketone.service;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;

import java.util.Collection;
import java.util.List;

public interface JpaMessageService {
    List<Message> findAll();

    Message save(MessageSaveDTO messageSaveDTO);

    Collection<Message> findByRoomName(String roomName);
}
