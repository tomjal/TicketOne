package com.ticketone.controller;

import java.util.List;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.controller.dto.RoomSaveDTO;
import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import com.ticketone.service.MessageService;
import com.ticketone.service.RoomService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ApiVersion.V1 + "/rooms")
public class RoomController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RoomService roomService;

    @Autowired
    private MessageService messageService;

    @GetMapping("/")
    public ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<List<Room>>(roomService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/open")
    public ResponseEntity<List<Room>> getAllOpenRooms() {
        return new ResponseEntity<List<Room>>(roomService.findByOpened(), HttpStatus.OK);
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Room>> getRoomsByClientId(@PathVariable("clientId") Long clientId) {
        return new ResponseEntity<List<Room>>(roomService.findByClient(clientId), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> newRoom(@RequestBody RoomSaveDTO roomDTO) {
        return new ResponseEntity<Room>(roomService.save(roomDTO), HttpStatus.OK);
    }

    @PutMapping("/{roomId}")
    public ResponseEntity<?> setRoomSolvedStatus(@PathVariable("roomId") Long roomId, @RequestBody Boolean isSolved) {
        return new ResponseEntity<Room>(roomService.updateSolvedStatus(roomId, isSolved), HttpStatus.OK);
    }

    // === Messages

    @PutMapping("/roomsIdsListView/messages")
    public ResponseEntity<List<Message>> getAllMessagesByRoomsIds(@RequestBody List<Long> roomIds) {
        return new ResponseEntity<List<Message>>(messageService.findByRooms(roomIds), HttpStatus.OK);
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getAllMessagesByRoomId(@PathVariable("roomId") Long roomId) {
        return new ResponseEntity<List<Message>>(messageService.findByRoom(roomId), HttpStatus.OK);
    }

    @PostMapping("/{roomId}/messages")
    public ResponseEntity<?> newMessage(@RequestBody MessageSaveDTO messageSaveDTO) {
        return new ResponseEntity<Message>(messageService.save(messageSaveDTO), HttpStatus.OK);
    }
}
