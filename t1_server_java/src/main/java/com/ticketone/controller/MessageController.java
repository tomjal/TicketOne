package com.ticketone.controller;

import com.ticketone.facade.TransactionFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/message")
public class MessageController {
	@Autowired
	private TransactionFacade transactionFacade;

}
