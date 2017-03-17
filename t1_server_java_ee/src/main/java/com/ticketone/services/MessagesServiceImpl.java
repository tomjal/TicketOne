package com.ticketone.services;

import javax.ejb.*;

import com.ticketone.interfaces.MessagesService;
import com.ticketone.datastore.Message;

@Stateless
@Local(MessagesService.class)
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class MessagesServiceImpl extends AbstractService<Message> implements MessagesService {

}
