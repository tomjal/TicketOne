package com.ticketone.facade.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketone.facade.TransactionFacade;
import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import com.ticketone.model.entity.User;
import com.ticketone.service.MessageService;
import com.ticketone.service.RoomService;
import com.ticketone.service.UserService;

@Service
public class TransactionFacadeImpl implements TransactionFacade {
	@Autowired
	private MessageService messageService;
	@Autowired
	private RoomService roomService;
	@Autowired
	private UserService userService;

}
