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
@RequestMapping(ApiVersion.V1 + "/messages")
public class MessageController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MessageService messageService;

    @GetMapping("/")
    public ResponseEntity<List<Message>> getAllMessages() {
        return new ResponseEntity<List<Message>>(messageService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> setMessage(@RequestBody MessageSaveDTO messageSaveDTO) {
        return new ResponseEntity<Message>(messageService.save(messageSaveDTO), HttpStatus.OK);
    }

    @GetMapping("/room/{roomName}")
    public ResponseEntity<Collection<Message>> getMessage(@PathVariable("roomName") String roomName) {
        return new ResponseEntity<Collection<Message>>(messageService.findByRoomName(roomName), HttpStatus.OK);
    }
}
