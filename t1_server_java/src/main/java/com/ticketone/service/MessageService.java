package com.ticketone.service;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;

import java.util.Collection;
import java.util.List;

public interface MessageService {
    List<Message> findAll();
}
