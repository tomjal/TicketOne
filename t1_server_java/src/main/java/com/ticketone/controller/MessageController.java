package com.ticketone.controller;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;
import com.ticketone.service.MessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/v1/messages")
public class MessageController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MessageService messageService;

    /**
     * REST method that returns list of all messages in system.
     *
     * @return List of Message
     * @returnWrapped com.ticketone.model.entity.Message[]
     * @HTTP 500 when fail of service
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Message>> getAllMessages() {
        return new ResponseEntity<List<Message>>(messageService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> setMessage(@RequestBody MessageSaveDTO messageSaveDTO) {
        return new ResponseEntity<Message>(messageService.save(messageSaveDTO), HttpStatus.OK);
    }

    @RequestMapping(value = "/room/{roomName}", method = RequestMethod.GET)
    public ResponseEntity<Collection<Message>> getMessage(@PathVariable("roomName") String roomName) {
        return new ResponseEntity<Collection<Message>>(messageService.findByRoomName(roomName), HttpStatus.OK);
    }
}
