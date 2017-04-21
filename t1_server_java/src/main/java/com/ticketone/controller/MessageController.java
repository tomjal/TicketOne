package com.ticketone.controller;

@RestController
@RequestMapping("/api/v1/message")
public class MessageController {
	@Autowired
	private TransactionFacade transactionFacade;

}
